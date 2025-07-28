<template>
  <div class="app">
    <header class="header">
      <h1>Lego UI 开发环境</h1>
      <p>用于开发和测试组件的环境</p>
    </header>

    <main class="main">
      <section class="demo-section">
        <h2>Button 组件测试</h2>
        <div class="demo-group">
          <h3>基础按钮</h3>
          <div class="button-group">
            <lego-button>默认按钮</lego-button>
            <lego-button type="primary">主要按钮</lego-button>
            <lego-button type="success">成功按钮</lego-button>
            <lego-button type="warning">警告按钮</lego-button>
            <lego-button type="danger">危险按钮</lego-button>
            <lego-button type="info">信息按钮</lego-button>
          </div>
        </div>

        <div class="demo-group">
          <h3>朴素按钮</h3>
          <div class="button-group">
            <lego-button plain>朴素按钮</lego-button>
            <lego-button type="primary" plain>主要按钮</lego-button>
            <lego-button type="success" plain>成功按钮</lego-button>
            <lego-button type="warning" plain>警告按钮</lego-button>
            <lego-button type="danger" plain>危险按钮</lego-button>
            <lego-button type="info" plain>信息按钮</lego-button>
          </div>
        </div>

        <div class="demo-group">
          <h3>不同尺寸</h3>
          <div class="button-group">
            <lego-button size="large">大按钮</lego-button>
            <lego-button>默认按钮</lego-button>
            <lego-button size="small">小按钮</lego-button>
            <lego-button size="mini">超小按钮</lego-button>
          </div>
        </div>

        <div class="demo-group">
          <h3>加载状态</h3>
          <div class="button-group">
            <lego-button loading>加载中</lego-button>
            <lego-button type="primary" loading>主要按钮</lego-button>
          </div>
        </div>

        <div class="demo-group">
          <h3>禁用状态</h3>
          <div class="button-group">
            <lego-button disabled>禁用按钮</lego-button>
            <lego-button type="primary" disabled>主要按钮</lego-button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
// 开发环境主组件

</script>

<style scoped>
.app {
  min-height: 100vh;
  padding: 20px;
  background-color: #f5f7fa;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  color: #409eff;
  margin: 0 0 10px 0;
}

.header p {
  color: #606266;
  margin: 0;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-section {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.demo-section h2 {
  color: #303133;
  margin: 0 0 30px 0;
  font-size: 24px;
}

.demo-group {
  margin-bottom: 30px;
}

.demo-group h3 {
  color: #606266;
  margin: 0 0 15px 0;
  font-size: 16px;
  font-weight: 500;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
