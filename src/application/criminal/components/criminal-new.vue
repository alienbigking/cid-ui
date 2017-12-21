<template>
    <div class="card">
        <div class="um-title">
            <p>基本信息</p>
        </div>
        <el-form class="form-criminal" :model="criminal" :rules="rules" ref="form" label-position="top">
          <div class="form-box">
            <el-form-item class="w25" label="编号" prop="bianhao">
                <el-input v-model="criminal.bianhao"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="姓名" prop="xingming">
                <el-input v-model="criminal.xingming"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="身份情况" prop="shenfenqingkuang">
              <el-select v-model="criminal.shenfenqingkuang" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="真实姓名" prop="zhenshixingming">
                <el-input v-model="criminal.zhenshixingming"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="别化名" prop="biehuaming">
                <el-input v-model="criminal.biehuaming"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="性别" prop="xingbie">
              <el-select v-model="criminal.xingbie" placeholder="请选择性别" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="民族" prop="minzu">
              <el-select v-model="criminal.minzu" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="出生日期" prop="chushengriqi">
              <el-date-picker v-model="criminal.chushengriqi" type="date"></el-date-picker>
            </el-form-item>
          </div>
          <div class="form-box">
            <el-form-item class="w25" label="捕前文化程度" prop="buqianwenhuachengdu">
              <el-select v-model="criminal.buqianwenhuachengdu" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="现文化程度" prop="xianwenhuachengdu">
              <el-select v-model="criminal.xianwenhuachengdu" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="捕前职业" prop="buqianzhiye">
              <el-select v-model="criminal.buqianzhiye" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="捕前面貌" prop="buqianmianmao">
              <el-select v-model="criminal.buqianmianmao" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="特长" prop="techang">
                <el-input v-model="criminal.techang"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="婚姻" prop="hunyin">
                <el-input v-model="criminal.hunyin"></el-input>
            </el-form-item>
          </div>
          <div class="form-box">
            <el-form-item class="w25" label="籍贯/国籍" prop="jiguan">
              <el-select v-model="criminal.jiguan" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="户籍分类" prop="hujifenlei">
              <el-select v-model="criminal.hujifenlei" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="出生地" prop="chushengdi">
              <el-select v-model="criminal.chushengdi" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w75" label="户籍住址" prop="hujidizhi">
              <el-select v-model="criminal.hujidizhi" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
              <el-input></el-input>
            </el-form-item>
            <el-form-item class="w75" label="家庭住址" prop="jiatingzhuzhi">
              <el-select v-model="criminal.jiatingzhuzhi" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
              <el-input></el-input>
            </el-form-item>
          </div>
          <div class="form-box">
            <el-form-item class="w50" label="逮捕机关" prop="daibujiguan">
              <el-select v-model="criminal.daibujiguan" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
              <el-select v-model="criminal.daibujiguan" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="逮捕日期" prop="daiburiqi">
              <el-date-picker v-model="criminal.daiburiqi" type="date"></el-date-picker>
            </el-form-item>
            <el-form-item class="w25" label="羁押日期" prop="jiyariqi">
              <el-date-picker v-model="criminal.jiyariqi" type="date"></el-date-picker>
            </el-form-item>
            <el-form-item class="w50" label="判决机关" prop="panjuejiguan">
              <el-select v-model="criminal.panjuejiguan" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
              <el-select v-model="criminal.panjuejiguan" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="判决日期" prop="panjueriqi">
              <el-date-picker v-model="criminal.panjueriqi" type="date"></el-date-picker>
            </el-form-item>
            <el-form-item class="w25" label="罪名" prop="zuiming">
                <el-input v-model="criminal.zuiming"></el-input>
            </el-form-item>
            <el-form-item class="w50" label="判决字号" prop="panjuezihao">
              <el-select v-model="criminal.panjuezihao" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
              <el-select v-model="criminal.panjuezihao" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="罚金" prop="fajin">
                <el-input v-model="criminal.fajin"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="罚金交纳" prop="fajinjiaona">
              <el-select v-model="criminal.fajinjiaona" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w50" label="刑期" prop="xingqi">
              <el-date-picker placeholder="刑期开始时间" v-model="criminal.xingqikaishi" type="date"></el-date-picker>
              <el-date-picker placeholder="刑期结束时间" v-model="criminal.xingqijieshu" type="date"></el-date-picker>
            </el-form-item>
            <el-form-item class="w25" label="剥政年限" prop="bozhengnianxian">
              <el-date-picker v-model="criminal.bozhengnianxian" type="date"></el-date-picker>
            </el-form-item>
            <div class="w25"></div>
            <el-form-item class="w50" label="一审机关" prop="yishenjiguan">
              <el-select v-model="criminal.yishenjiguan" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
              <el-input></el-input>
            </el-form-item>
            <el-form-item class="w50" label="一审字号" prop="yishenzihao">
              <el-input v-model="criminal.yishenzihao"></el-input>
              <el-input v-model="criminal.yishenzihao"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="原案犯类别" prop="yuananfanleibie">
              <el-select v-model="criminal.yuananfanleibie" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="收押类别" prop="shouyaleibie">
              <el-select v-model="criminal.shouyaleibie" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="入监日期" prop="rujianriqi">
              <el-date-picker v-model="criminal.rujianriqi" type="date"></el-date-picker>
            </el-form-item>
            <el-form-item class="w25" label="调入日期" prop="diaoruriqi">
              <el-date-picker v-model="criminal.diaoruriqi" type="date"></el-date-picker>
            </el-form-item>
            <el-form-item class="w25" label="何处调来" prop="hechudiaolai">
              <el-select v-model="criminal.hechudiaolai" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="看守所" prop="kanshousuo">
              <el-select v-model="criminal.kanshousuo" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="前科次数" prop="qiankecishu">
                <el-input v-model="criminal.qiankecishu"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="累惯犯" prop="leiguanfan">
              <el-select v-model="criminal.leiguanfan" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="流窜类别" prop="liucuanleibie">
              <el-select v-model="criminal.liucuanleibie" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="三涉" prop="sanshe">
                <el-input v-model="criminal.sanshe"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="四史" prop="sishi">
                <el-input v-model="criminal.sishi"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="团伙人数" prop="tuanhuorenshu">
                <el-input v-model="criminal.tuanhuorenshu"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="团伙犯罪" prop="tuanhuofanzui">
              <el-select v-model="criminal.tuanhuofanzui" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="队别" prop="duibie">
              <el-select v-model="criminal.duibie" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="分管等级" prop="fenguandengji">
              <el-select v-model="criminal.fenguandengji" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="分押类型" prop="fenyaleixing">
              <el-select v-model="criminal.fenyaleixing" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="减刑尺度" prop="jianxingchidu">
              <el-select v-model="criminal.jianxingchidu" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="身份证号" prop="shenfenzhenghao">
                <el-input v-model="criminal.shenfenzhenghao"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="执行通知书下达日期" prop="zhixingtongzhishuxiadariqi">
              <el-date-picker v-model="criminal.zhixingtongzhishuxiadariqi" type="date"></el-date-picker>
            </el-form-item>
            <el-form-item class="w25" label="档案查阅密级" prop="danganchayuemiji">
              <el-select v-model="criminal.danganchayuemiji" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="form-box">
            <el-form-item class="w50" label="起诉机关" prop="qisujiguan">
              <el-select v-model="criminal.qisujiguan" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
              <el-select v-model="criminal.qisujiguan" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w50" label="起诉字号" prop="qisuzihao">
              <el-select v-model="criminal.qisuzihao" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
              <el-input></el-input>
            </el-form-item>
            <el-form-item class="w25" label="有无上诉" prop="youwushangsu">
                <el-input v-model="criminal.youwushangsu"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="终审情况" prop="zhongshenqingkuang">
                <el-input v-model="criminal.zhongshenqingkuang"></el-input>
            </el-form-item>
            <el-form-item class="w50" label="终审字号" prop="zhongshenzihao">
              <el-select v-model="criminal.zhongshenzihao" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
              <el-input></el-input>
            </el-form-item>
            <el-form-item class="w50" label="终审机关" prop="zhongshenjiguan">
              <el-select v-model="criminal.zhongshenjiguan" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
              <el-select v-model="criminal.zhongshenjiguan" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="form-box">
            <el-form-item class="w25" label="监舍号" prop="jianshehao">
                <el-input v-model="criminal.jianshehao"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="互监组号" prop="hujianzuhao">
                <el-input v-model="criminal.hujianzuhao"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="互监岗位" prop="hujiangangwei">
                <el-input v-model="criminal.hujiangangwei"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="床位号" prop="chuangweihao">
                <el-input v-model="criminal.chuangweihao"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="监管干警" prop="jianguanganjing">
                <el-input v-model="criminal.jianguanganjing"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="勤杂分工" prop="qinzafengong">
                <el-input v-model="criminal.qinzafengong"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="工种" prop="gongzhong">
                <el-input v-model="criminal.gongzhong"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="所学专业" prop="require">
                <el-input v-model="criminal.suoxuezhuanye"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="音像档案号" prop="require">
                <el-input v-model="criminal.yinxiangdanganhao"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="参加过何党派团体" prop="canjiaguohedangpaituanti">
                <el-input v-model="criminal.canjiaguohedangpaituanti"></el-input>
            </el-form-item>
            <div class="w25"></div>
            <el-form-item class="w50" label="附带民事判决情况" prop="fudaiminshipanjueqingkuang">
                <el-input :maxlength="255" v-model="criminal.fudaiminshipanjueqingkuang" type="textarea" resize="none"></el-input>
            </el-form-item>
            <el-form-item class="w50" label="入监备注" prop="rujianbeizhu">
                <el-input :maxlength="255" v-model="criminal.rujianbeizhu" type="textarea" resize="none"></el-input>
            </el-form-item>
            <el-form-item class="hasButton">
                <el-button type="primary" @click="onSubmit" :loading="saving">保存</el-button>
            </el-form-item>
          </div>
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
      rules: {},
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
      // this.$router.push(`/criminal/edit/a1969201-733a-4e3f-a00b-ae805561f9bc`);
      this.$refs["form"].validate(valid => {
        if (valid) {
          console.log(this.criminal);
          this.saving = true;
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
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.w25{
  // margin-bottom: 30px;
}
</style>
