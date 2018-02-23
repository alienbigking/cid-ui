<template>
  <div v-loading='loading'>
    <el-form
      class="form-criminal"
      :model="criminalForfeit"
      :rules="rules"
      ref="form"
      label-position="top">
      <el-form-item
        class="w-px180"
        label="罚金单据"
        prop="receiptNumber">
        <el-input
        v-model="criminalForfeit.receiptNumber" />
      </el-form-item>
      <el-form-item
        class="w-px180"
        label="缴纳罚金(元)"
        prop="amount">
        <el-input
          v-model="criminalForfeit.amount"
          placeholder="请输入数字，不能带汉字" />
      </el-form-item>
      <el-form-item
        class="w-px180"
        label="收款单位"
        prop="payee">
        <el-input v-model="criminalForfeit.payee"/>
      </el-form-item>
      <el-form-item
        class="w-px180"
        label="缴纳日期"
        prop="paymentDate">
        <el-date-picker
          v-model="criminalForfeit.paymentDate"
          type="date"/>
      </el-form-item>
      <el-form-item
        class="w100"
        label="备注"
        prop="remark" >
        <el-input
          type="textarea"
          resize="none"
          v-model="criminalForfeit.remark"/>
      </el-form-item>
      <div class="has-right-button">
        <el-button
          class="button-cancel"
          @click="onClose">返 回</el-button>
        <el-button
          class="button-confirm"
          :loading="saving"
          @click="onSave">保 存</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import _ from 'lodash';

export default {
  props: {
    criminalForfeitId: {
      type: String,
      default: ''
    },
    editDialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      criminalForfeit: _.cloneDeep(this.$store.state.prisonCriminal.criminalForfeit),
      rules: {
        amount: [{ required: true, message: '此项不能为空' }, { validator: this.$validators.decimal8i2f }],
        paymentDate: [{ required: true, message: '请输入缴纳日期' }],
        receiptNumber: [{ required: true, message: '请输入收款单据' }],
        payee: [{ required: true, message: '请输入接收单位' }]
      },
      loading: true,
      saving: false
    };
  },
  watch: {
    editDialogVisible(val) {
      if (val) {
        this.loading = true;
        this.$refs.form.resetFields();
        this.render();
      }
    },
    criminalForfeit: {
      handler: _.debounce(function(criminalForfeit) {
        this.$store.commit('updatePrisonCriminalForfeit', criminalForfeit);
      }, 500),
      deep: true
    }
  },
  created() {
    this.render();
  },
  methods: {
    ...mapActions([
      'getPrisonCriminalForfeit',
      'addPrisonCriminalForfeit',
      'updatePrisonCriminalForfeit',
      'getAllPrisonCriminalForfeits'
    ]),
    onClose() {
      this.$emit('on-close');
    },
    onSave() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          if (this.criminalForfeit.id) {
            // 修改
            this.saving = true;
            this.updatePrisonCriminalForfeit()
              .then(res => {
                this.saving = false;
                this.getAllPrisonCriminalForfeits(this.$route.params.id);
                this.$message.success('修改成功');
                this.$emit('on-close');
              })
              .catch(() => {
                this.saving = false;
                this.$message.error('修改失败');
              });
          } else {
            // 新增
            this.saving = true;
            this.addPrisonCriminalForfeit()
              .then(res => {
                this.saving = false;
                this.getAllPrisonCriminalForfeits(this.$route.params.id);
                this.$message.success('新增成功');
                this.$emit('on-close');
              })
              .catch(() => {
                this.saving = false;
                this.$message.error('新增失败');
              });
          }
        }
      });
    },
    render() {
      if (!this.criminalForfeitId) {
        this.$store.commit('setPrisonCriminalForfeit', {
          criminalId: this.$route.params.id
        });
        this.criminalForfeit = _.cloneDeep(this.$store.state.prisonCriminal.criminalForfeit);
        this.loading = false;
      } else {
        this.getPrisonCriminalForfeit(this.criminalForfeitId).then(() => {
          this.criminalForfeit = _.cloneDeep(this.$store.state.prisonCriminal.criminalForfeit);
          this.loading = false;
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form-criminal {
  padding: 0 15px 0 35px;
  .w-px180 {
    width: 180px;
    float: left;
    margin-right: 40px;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
  .w100 {
    padding-left: 0px;
  }
}
</style>
