<template>
  <div class="setRole">
    <el-drawer
      title="角色权限设置"
      :visible.sync="drawer"
      direction="rtl"
      @closed="close"
      :size="900"
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
            @click="getNode"
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
      midarr: [],
      treeCheckedKeys: [],
    };
  },
  created() {
    //console.log(this.treeMenu);
  },
  mounted() {},
  methods: {
    getNode(treeMenu) {
      console.log(treeMenu);
    },
    show(row) {
      this.roleInfo = row;
      console.log("row", this.roleInfo);
      //console.log(row.id);
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
        //console.log(res.data.data.m_id);

        this.treeCheckedKeys = res.data.data.m_id.split(",");
        // let mid = res.data.data.m_id;
        // this.midarr.push(mid);
        // //后端返回的所有id
        // console.log(this.midarr);
        // var that = this;
        // this.midarr.forEach((i, n) => {
        //   var node = that.$refs.menuTree.getNode(i);
        //   console.log(node.isLeaf);
        //   if (node.isLeaf) {
        //     that.$refs.menuTree.setChecked(node, true);
        //   }
        // });

        // console.log("id组 字符串", this.mid);
        // console.log("id组 数组", this.treeCheckedKeys);
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
        }
      });
    },

    getMenuOperate() {
      let params = {
        token: sessionStorage.getItem("token"),
      };
      menuList(params).then((res) => {
        this.treeMenu = res.data.data;
        //console.log(this.treeMenu);
        this.drawer = true;
      });
    },

    // 节点被点击
    checkChange(data, checked) {
      console.log(
        this.$refs.menuTree
          .getCheckedNodes()
          .concat(this.$refs.menuTree.getHalfCheckedNodes())
      );
      let treedata = this.$refs.menuTree
        .getCheckedNodes()
        .concat(this.$refs.menuTree.getHalfCheckedNodes());
      let arrnew = treedata
        .map((obj, index) => {
          return obj.id;
        })
        .join(",")
        .split(",");
      console.log(arrnew);
      var m_id = arrnew.toString();
      console.log("mid", m_id);
      this.m_id = m_id;
      // let checkedKey = this.$refs.menuTree.getCheckedKeys();
      // //console.log(checkedKey);
      // if (checked) {
      //   console.log("全选所得", data.id);
      //   let searchId = data.id;
      //   if (checkedKey.indexOf(searchId) == -1) {
      //     checkedKey.push(searchId);
      //     this.$refs.menuTree.setCheckedKeys(checkedKey);
      //     console.log("获取", this.$refs.menuTree.setCheckedKeys(checkedKey));
      //   }
      // }
      // else {
      //   let searchParId = data.id;
      //   console.log("半选所得", searchParId);
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
