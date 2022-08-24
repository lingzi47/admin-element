<template>
  <div>
    <el-dialog
      class="AddDialog"
      :title="type == 1 ? '新增' : '编辑'"
      :visible.sync="dialogVisible"
      width="800px"
      hegiht="1000px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        :rules="rules"
        label-width="auto"
      >
        <el-input type="hidden" v-model="ruleForm.id"></el-input>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="权限名称" prop="m_name">
              <el-input
                v-model="ruleForm.m_name"
                placeholder="请输入权限名称"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="类型"
              prop="type"
              :rules="[
                { required: true, message: '类型不能为空', trigger: 'blur' },
              ]"
            >
              <el-select
                v-model="ruleForm.type"
                clearable
                placeholder="请选择角色"
              >
                <el-option label="菜单" :value="1"></el-option>
                <el-option label="按钮" :value="2"></el-option>
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="路由地址" prop="route">
              <el-input
                v-model="ruleForm.route"
                placeholder="一级路由地址要以“/” 开头"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="路由名称" prop="name">
              <el-input
                v-model="ruleForm.name"
                placeholder="请输入路由名称"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="排序" prop="sort">
              <el-input
                v-model="ruleForm.sort"
                placeholder="请输入排序"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="是否跳转界面" prop="target">
              <el-radio-group v-model="ruleForm.target">
                <el-radio label="1">是</el-radio>
                <el-radio label="2">否</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { addMenu, menuShow, editMenu } from "@/request/api";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      id: "",
      pid: "",
      token: "",
      type: "", //1新增，2编辑
      dialogVisible: false,
      ruleForm: {
        id: "",
        route: "",
        target: "",
        m_name: "",
        sort: "",
        name: "",
        type: "",
      },
      rules: {
        m_name: [
          { required: true, message: "权限名称不能为空", trigger: "blur" },
        ],
        name: [
          { required: true, message: "路由名称不能为空", trigger: "blur" },

          {
            pattern: /^[a-zA-Z]+$/,
            message: "请输入英文",
            trigger: "blur",
          },
        ],
        target: [
          { required: true, message: "请选择是否跳转新页面", trigger: "blur" },
        ],
        route: [
          { required: true, message: "路由地址不能为空", trigger: "blur" },
        ],
        sort: [{ required: true, message: "序号不能为空", trigger: "blur" }],
      },
    };
  },
  created: function () {
    //console.log(this.type);

    this.getUserEdit();
  },
  mounted: function () {},
  methods: {
    //获取修改的信息
    getUserEdit() {},
    show(type, row) {
      this.type = type;
      this.dialogVisible = true;
      if (type == 1) {
        this.ruleForm = {
          id: "",
          route: "",
          target: "",
          m_name: "",
          sort: "",
          name: "",
          type: "",
        };
      } else if (type == 3) {
        this.ruleForm = row;
        let id = this.ruleForm.id;
        this.id = id;
        let params = {
          token: sessionStorage.getItem("token"),
        };
        menuShow(params, id).then((res) => {
          console.log(res);
          this.pid = res.data.data.pid;
          //console.log(this.pid);
          this.ruleForm = {
            id: "",
            route: "",
            target: "",
            m_name: "",
            sort: "",
            name: "",
            type: "",
          };
        });
      } else {
        this.ruleForm = row;

        let id = this.ruleForm.id;
        this.id = id; //当前id
        this.pid = this.ruleForm.pid;
        console.log(this.pid);
        let params = {
          token: sessionStorage.getItem("token"),
        };
        menuShow(params, id).then((res) => {
          //console.log(res.data.data);
          this.ruleForm = res.data.data;
        });
      }
    },
    close() {
      this.dialogVisible = false;
      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate(); //关闭清空校验规则
      });
    },
    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          if (this.type == 1) {
            console.log("一级添加", this.type);
            let token = sessionStorage.getItem("token");
            this.token = token;
            let params = {
              pid: 0,
              token: sessionStorage.getItem("token"),
              route: this.ruleForm.route,
              m_name: this.ruleForm.m_name,
              sort: this.ruleForm.sort,
              name: this.ruleForm.name,
              target: this.ruleForm.target,
              type: this.ruleForm.type,
            };
            addMenu(params).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("新增成功");
                this.$parent.getUserList();
              } else {
                this.$message.error(res.data.msg);
                this.$parent.getUserList();
              }
            });
          } else if (this.type == 3) {
            //console.log(this.pid);
            console.log("二级添加", this.type);
            let token = sessionStorage.getItem("token");
            this.token = token;
            let params = {
              token: sessionStorage.getItem("token"),
              pid: this.id,
              route: this.ruleForm.route,
              m_name: this.ruleForm.m_name,
              sort: this.ruleForm.sort,
              name: this.ruleForm.name,
              target: this.ruleForm.target,
              type: this.ruleForm.type,
            };
            addMenu(params).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("新增成功");
                this.$parent.getUserList();
              }
            });
          } else {
            console.log("修改", this.type);
            let token = sessionStorage.getItem("token");
            this.token = token;
            let id = this.id;
            let params = {
              token: sessionStorage.getItem("token"),
              route: this.ruleForm.route,
              m_name: this.ruleForm.m_name,
              sort: this.ruleForm.sort,
              pid: this.pid,
              name: this.ruleForm.name,
              target: this.ruleForm.target,
              type: this.ruleForm.type,
            };

            editMenu(params, id).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("编辑成功");
                this.$parent.getUserList();
              }
            });
          }
          this.$parent.getUserList();
          this.close();
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style>
</style>
