<template>
  <div class="setRole">
    <el-drawer
      :title="'【' + roleInfo.title + '】角色权限设置'"
      :visible.sync="drawer"
      direction="rtl"
      @closed="close"
      :size="600"
    >
      <div class="clearflex">
        <!-- <el-button @click="close">取 消</el-button> -->
        <el-button type="primary" @click="changeRole">确 定</el-button>
      </div>
      <el-scrollbar style="height: calc(100% - 40px)">
        <div class="tree-menu">
          <el-tree
            ref="menuTree"
            :data="treeMenu"
            :props="defaultProps"
            show-checkbox
            :default-expand-all="true"
            node-key="id"
            :default-checked-keys="treeCheckedKeys"
            @check-change="checkChange"
          ></el-tree>
        </div>
      </el-scrollbar>
    </el-drawer>
  </div>
</template>

<script>
import { getMenuOperate, setRolePermissions } from "@/api/role";
export default {
  name: "setRole",
  components: {},
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "title",
      },
      drawer: false,
      roleInfo: {},
      treeMenu: [],
      treeCheckedKeys: [],
    };
  },
  created() {},
  mounted() {},
  methods: {
    show(row) {
      this.roleInfo = row;
      this.getMenuOperate(row.name);
    },
    close() {
      this.$refs.menuTree.setCheckedKeys([]);
    },
    changeRole() {
      let checkedKey = this.$refs.menuTree.getCheckedKeys();
      this.setRolePermissions(this.roleInfo.name, checkedKey);
    },

    async getMenuOperate(roleName) {
      let res = await getMenuOperate({ roleName: roleName });

      if (res.status == 200) {
        this.treeMenu = res.data.menuPerList;
        this.treeCheckedKeys = res.data.checkedKeys;
        this.drawer = true;
      }
    },
    async setRolePermissions(roleName, checkedKey) {
      let res = await setRolePermissions({
        roleName: roleName,
        checkedKey: checkedKey,
      });
      if (res.status == 200) {
        this.$message.success("权限设置成功");
        this.drawer = false;
      }
    },
    // 节点被点击
    checkChange(data, checked, indeterminate) {
      let checkedKey = this.$refs.menuTree.getCheckedKeys();
      if (checked) {
        let searchId = data.id.substring(0, 5) + "001";
        if (checkedKey.indexOf(searchId) == -1) {
          checkedKey.push(searchId);
          this.$refs.menuTree.setCheckedKeys(checkedKey);
        }
      } else {
        let searchParId = data.id.substring(0, 5);
        let searchLastId = data.id.substring(5);
        let searchParFlag = false;
        checkedKey.map((item) => {
          if (item.substring(0, 5) == searchParId) searchParFlag = true;
        });
        if (searchLastId == "001" && searchParFlag) {
          checkedKey.push(data.id);
          this.$refs.menuTree.setCheckedKeys(checkedKey);
          this.$message.warning("当前菜单有其他操作，不能取消查询权限");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .el-drawer__body {
    overflow: auto;
    overflow-y: hidden;
  }
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
.clearflex {
  padding: 0 20px;
  *zoom: 1;
  text-align: right;
}
/deep/ .tree-menu {
  padding: 20px;

  .custom-tree-node {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .menu-role {
      flex: 1;
      text-align: right;
    }
  }
  .el-tree {
    .el-tree-node__children {
      .el-tree-node__children {
        padding-left: 40px;
        .el-tree-node {
          display: inline-block;
          .el-tree-node__content {
            padding: 0 20px 0 0 !important;
          }
        }
      }
    }
  }
}
</style>
