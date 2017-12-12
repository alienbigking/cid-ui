<template>
  <div class="card">
    <div class="um-title">
      <p>新增监区</p>
    </div>
    <el-form class="labelInTop">
      <el-form-item class="w50" label="监区名称" >
        <el-input></el-input>
      </el-form-item>
      <el-form-item class="w50" label="上级监区">
        <el-select placeholder="十二监区">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.labelInTop{
  padding-left: 20px;
  padding-top: 20px;
}

</style>

