<template>
  <div class="setRole">
    <el-drawer
      title="角色权限设置"
      :visible.sync="drawer"
      direction="rtl"
      @closed="close"
      :size="1600"
    >
      <div class="clearflex">
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
import { menuList, addUsermenu, Usermenushow } from "@/request/api";

export default {
  name: "setRole",
  components: {},
  data() {
    return {
      id: "",
      m_id: "",
      defaultProps: {
        children: "children",
        label: "m_name",
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

      this.id = row.id;
      this.getMenuOperate();
      this.Usermenushow();
    },

    close() {
      this.$refs.menuTree.setCheckedKeys([]);
    },
    Usermenushow() {
      let id = this.id;
      let params = {
        token: sessionStorage.getItem("token"),
      };
      Usermenushow(params, id).then((res) => {
        this.mid = res.data.data.m_id;
        this.treeCheckedKeys = this.mid.split(",");
      });
    },

    changeRole() {
      let id = this.id;
      let params = {
        token: sessionStorage.getItem("token"),
        m_id: this.m_id,
      };
      addUsermenu(params, id).then((res) => {
        if (res.status == 200) {
          this.$message.success("权限设置成功");
          this.drawer = false;
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },

    getMenuOperate() {
      let params = {
        token: sessionStorage.getItem("token"),
      };
      menuList(params).then((res) => {
        this.treeMenu = res.data.data;

        this.drawer = true;
      });
    },

    // 节点被点击
    checkChange(data, checked) {
      let treedata = this.$refs.menuTree
        .getCheckedNodes()
        .concat(this.$refs.menuTree.getHalfCheckedNodes());
      let arrnew = treedata
        .map((obj, index) => {
          return obj.id;
        })
        .join(",");

      var m_id = arrnew.toString();

      this.m_id = m_id;
      // let checkedKey = this.$refs.menuTree.getCheckedKeys();
      // if (checked) {
      //   let searchId = data.id;
      //   if (checkedKey.indexOf(searchId) == -1) {
      //     checkedKey.push(searchId);
      //     this.$refs.menuTree.setCheckedKeys(checkedKey);

      //   }
      // }
      // else {
      //   let searchParId = data.id;
      //   // checkedKey.map((item) => {
      //   //   if (item.substring(0, 5) == searchParId) searchParFlag = true;
      //   // });
      // }
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
