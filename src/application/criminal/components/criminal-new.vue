<template>
    <div class="card">
        <div class="um-title">
            <p>基本信息</p>
        </div>
        <el-form class="form-criminal" :model="criminal" :rules="rules" ref="form" label-position="top">
          <div class="form-box">
            <el-form-item class="w25" label="编号" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="姓名" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="身份情况" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="真实姓名" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="别化名" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="性别" prop="name">
              <el-select v-model="criminal.sex" placeholder="请选择性别" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="民族" prop="code">
              <el-select v-model="criminal.minzu" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="出生日期" prop="required">
              <el-date-picker class="datePicker" :clearable="false" v-model="criminal.date" type="date"></el-date-picker>
            </el-form-item>
            <el-form-item class="hasButton">
                <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
          </div>
          <!-- <div class="form-box">
            <el-form-item class="w25" label="捕前文化程度" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="现文化程度" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="捕前职业" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="捕前面貌" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="特长" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="婚姻" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
          </div> -->
          <!-- <div class="form-box">
            <el-form-item class="w25" label="籍贯/国籍" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="户籍分类" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="出生地" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="户籍住址" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="家庭住址" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
          </div> -->
          <!-- <div class="form-box">
            <el-form-item class="w25" label="逮捕机关" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="逮捕日期" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="羁押日期" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="判决机关" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="判决日期" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="罪名" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="判决字号" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="罚金" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="罚金交纳" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="刑期" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="剥政年限" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="一审机关" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="一审字号" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="原案犯类别" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="收押类别" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="入监日期" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="调入日期" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="何处调来" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="看守所" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="前科次数" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="累惯犯" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="流窜类别" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="三涉" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="四史" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="团伙人数" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="团伙犯罪" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="队别" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="分管等级" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="分押类型" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="减刑尺度" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="身份证号" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="执行通知书下达日期" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="档案查阅密级" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
          </div> -->
          <!-- <div class="form-box">
            <el-form-item class="w25" label="起诉机关" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="起诉字号" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="有无上诉" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="终审情况" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="终审字号" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="终审机关" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
          </div> -->
          <!-- <div class="form-box">
            <el-form-item class="w25" label="监舍号" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="互监组号" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="互监岗位" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="床位号" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="监管干警" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="勤杂分工" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="工种" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="所学专业" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="音像档案号" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="参加过何党派团体" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="附带民事判决情况" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="入监备注" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="hasButton">
                <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
          </div> -->
        </el-form>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";
export default {
  data() {
    return {
      criminal: {},
      rules: {
        required: [{ required: true, message: "该项必填", trigger: "blur" }],
        code: [
          { required: true, message: "请输入编号", trigger: "blur" },
          { max: 50, message: "长度在 1 到 50 个字符", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入租户名称", trigger: "blur" },
          { max: 100, message: "长度在 1 到 100 个字符", trigger: "blur" }
        ],
        description: [{ max: 255, message: "255 个字符以内", trigger: "blur" }]
      },
      saving: false
    };
  },
  watch: {
    criminal: {
      handler: _.debounce(function(criminal) {
        this.$store.commit("updateCriminal", criminal);
      }, 500),
      deep: true
    }
  },
  methods: {
    ...mapActions(["addPrisonTenant"]),
    onSubmit() {
      console.log(this.criminal);
      this.$router.push(`/criminal/edit/a1969201-733a-4e3f-a00b-ae805561f9bc`);
      // this.$refs["form"].validate(valid => {
      //   if (valid) {
      //     console.log(this.criminal);
      //     this.saving = true;
          // this.addPrisonTenant()
          //   .then(res => {
          //     this.saving = false;
          //     this.$message.success("新增成功");
          //     this.$router.push(`/criminal/list`);
          //   })
          //   .catch(() => {
          //     this.$message.error("新增失败");
          //     this.saving = false;
          //   });
      //   }
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
.w25{
  // margin-bottom: 30px;
}
</style>
