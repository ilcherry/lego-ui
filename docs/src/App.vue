<template>
  <div id="app">
    <!-- 头部导航 -->
    <header class="header">
      <div class="header-content">
        <a href="#" class="logo">
          <div class="logo-icon"></div>
          Lego UI
        </a>
        <nav class="nav">
          <a href="#" class="nav-link active">组件</a>
          <a href="https://github.com/your-username/lego-ui" class="nav-link" target="_blank">GitHub</a>
        </nav>
      </div>
    </header>

    <!-- 主要内容 -->
    <main class="main">
      <!-- 侧边栏 -->
      <aside class="sidebar">
        <h3>组件</h3>
        <ul class="menu">
          <li class="menu-item">
            <a href="#button" class="menu-link active">Button 按钮</a>
          </li>
        </ul>
      </aside>

      <!-- 内容区域 -->
      <div class="content">
        <section id="button" class="demo-section">
          <h1 class="demo-title">Button 按钮</h1>
          <p class="demo-description">
            常用的操作按钮，支持多种类型、尺寸和状态。
          </p>

          <!-- 基础用法 -->
          <h2>基础用法</h2>
          <p>基础的按钮用法。</p>
          <div class="demo-container">
            <div class="demo-preview">
              <lego-button>默认按钮</lego-button>
              <lego-button type="primary">主要按钮</lego-button>
              <lego-button type="success">成功按钮</lego-button>
              <lego-button type="warning">警告按钮</lego-button>
              <lego-button type="danger">危险按钮</lego-button>
              <lego-button type="info">信息按钮</lego-button>
            </div>
            <div class="demo-code">
              <pre><code>&lt;lego-button&gt;默认按钮&lt;/lego-button&gt;
&lt;lego-button type="primary"&gt;主要按钮&lt;/lego-button&gt;
&lt;lego-button type="success"&gt;成功按钮&lt;/lego-button&gt;
&lt;lego-button type="warning"&gt;警告按钮&lt;/lego-button&gt;
&lt;lego-button type="danger"&gt;危险按钮&lt;/lego-button&gt;
&lt;lego-button type="info"&gt;信息按钮&lt;/lego-button&gt;</code></pre>
            </div>
          </div>

          <!-- 朴素按钮 -->
          <h2>朴素按钮</h2>
          <p>朴素按钮同样设置了多种类型。</p>
          <div class="demo-container">
            <div class="demo-preview">
              <lego-button plain>朴素按钮</lego-button>
              <lego-button type="primary" plain>主要按钮</lego-button>
              <lego-button type="success" plain>成功按钮</lego-button>
              <lego-button type="warning" plain>警告按钮</lego-button>
              <lego-button type="danger" plain>危险按钮</lego-button>
              <lego-button type="info" plain>信息按钮</lego-button>
            </div>
            <div class="demo-code">
              <pre><code>&lt;lego-button plain&gt;朴素按钮&lt;/lego-button&gt;
&lt;lego-button type="primary" plain&gt;主要按钮&lt;/lego-button&gt;
&lt;lego-button type="success" plain&gt;成功按钮&lt;/lego-button&gt;
&lt;lego-button type="warning" plain&gt;警告按钮&lt;/lego-button&gt;
&lt;lego-button type="danger" plain&gt;危险按钮&lt;/lego-button&gt;
&lt;lego-button type="info" plain&gt;信息按钮&lt;/lego-button&gt;</code></pre>
            </div>
          </div>

          <!-- 圆角按钮 -->
          <h2>圆角按钮</h2>
          <p>圆角按钮。</p>
          <div class="demo-container">
            <div class="demo-preview">
              <lego-button round>圆角按钮</lego-button>
              <lego-button type="primary" round>主要按钮</lego-button>
              <lego-button type="success" round>成功按钮</lego-button>
              <lego-button type="warning" round>警告按钮</lego-button>
              <lego-button type="danger" round>危险按钮</lego-button>
              <lego-button type="info" round>信息按钮</lego-button>
            </div>
            <div class="demo-code">
              <pre><code>&lt;lego-button round&gt;圆角按钮&lt;/lego-button&gt;
&lt;lego-button type="primary" round&gt;主要按钮&lt;/lego-button&gt;
&lt;lego-button type="success" round&gt;成功按钮&lt;/lego-button&gt;
&lt;lego-button type="warning" round&gt;警告按钮&lt;/lego-button&gt;
&lt;lego-button type="danger" round&gt;危险按钮&lt;/lego-button&gt;
&lt;lego-button type="info" round&gt;信息按钮&lt;/lego-button&gt;</code></pre>
            </div>
          </div>

          <!-- 圆形按钮 -->
          <h2>圆形按钮</h2>
          <p>圆形按钮。</p>
          <div class="demo-container">
            <div class="demo-preview">
              <lego-button circle icon="👍"></lego-button>
              <lego-button type="primary" circle icon="✓"></lego-button>
              <lego-button type="success" circle icon="✓"></lego-button>
              <lego-button type="warning" circle icon="!"></lego-button>
              <lego-button type="danger" circle icon="✗"></lego-button>
              <lego-button type="info" circle icon="i"></lego-button>
            </div>
            <div class="demo-code">
              <pre><code>&lt;lego-button circle icon="👍"&gt;&lt;/lego-button&gt;
&lt;lego-button type="primary" circle icon="✓"&gt;&lt;/lego-button&gt;
&lt;lego-button type="success" circle icon="✓"&gt;&lt;/lego-button&gt;
&lt;lego-button type="warning" circle icon="!"&gt;&lt;/lego-button&gt;
&lt;lego-button type="danger" circle icon="✗"&gt;&lt;/lego-button&gt;
&lt;lego-button type="info" circle icon="i"&gt;&lt;/lego-button&gt;</code></pre>
            </div>
          </div>

          <!-- 不同尺寸 -->
          <h2>不同尺寸</h2>
          <p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
          <div class="demo-container">
            <div class="demo-preview">
              <lego-button size="large">大按钮</lego-button>
              <lego-button>默认按钮</lego-button>
              <lego-button size="small">小按钮</lego-button>
              <lego-button size="mini">超小按钮</lego-button>
            </div>
            <div class="demo-code">
              <pre><code>&lt;lego-button size="large"&gt;大按钮&lt;/lego-button&gt;
&lt;lego-button&gt;默认按钮&lt;/lego-button&gt;
&lt;lego-button size="small"&gt;小按钮&lt;/lego-button&gt;
&lt;lego-button size="mini"&gt;超小按钮&lt;/lego-button&gt;</code></pre>
            </div>
          </div>

          <!-- 禁用状态 -->
          <h2>禁用状态</h2>
          <p>按钮不可用状态。</p>
          <div class="demo-container">
            <div class="demo-preview">
              <lego-button disabled>默认按钮</lego-button>
              <lego-button type="primary" disabled>主要按钮</lego-button>
              <lego-button type="success" disabled>成功按钮</lego-button>
              <lego-button type="warning" disabled>警告按钮</lego-button>
              <lego-button type="danger" disabled>危险按钮</lego-button>
              <lego-button type="info" disabled>信息按钮</lego-button>
            </div>
            <div class="demo-code">
              <pre><code>&lt;lego-button disabled&gt;默认按钮&lt;/lego-button&gt;
&lt;lego-button type="primary" disabled&gt;主要按钮&lt;/lego-button&gt;
&lt;lego-button type="success" disabled&gt;成功按钮&lt;/lego-button&gt;
&lt;lego-button type="warning" disabled&gt;警告按钮&lt;/lego-button&gt;
&lt;lego-button type="danger" disabled&gt;危险按钮&lt;/lego-button&gt;
&lt;lego-button type="info" disabled&gt;信息按钮&lt;/lego-button&gt;</code></pre>
            </div>
          </div>

          <!-- 加载状态 -->
          <h2>加载状态</h2>
          <p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
          <div class="demo-container">
            <div class="demo-preview">
              <lego-button loading>加载中</lego-button>
              <lego-button type="primary" loading>加载中</lego-button>
              <lego-button type="success" loading>加载中</lego-button>
              <lego-button type="warning" loading>加载中</lego-button>
              <lego-button type="danger" loading>加载中</lego-button>
              <lego-button type="info" loading>加载中</lego-button>
            </div>
            <div class="demo-code">
              <pre><code>&lt;lego-button loading&gt;加载中&lt;/lego-button&gt;
&lt;lego-button type="primary" loading&gt;加载中&lt;/lego-button&gt;
&lt;lego-button type="success" loading&gt;加载中&lt;/lego-button&gt;
&lt;lego-button type="warning" loading&gt;加载中&lt;/lego-button&gt;
&lt;lego-button type="danger" loading&gt;加载中&lt;/lego-button&gt;
&lt;lego-button type="info" loading&gt;加载中&lt;/lego-button&gt;</code></pre>
            </div>
          </div>

          <!-- 带图标的按钮 -->
          <h2>带图标的按钮</h2>
          <p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p>
          <div class="demo-container">
            <div class="demo-preview">
              <lego-button icon="🔍">搜索</lego-button>
              <lego-button type="primary" icon="📝">编辑</lego-button>
              <lego-button type="success" icon="✓">确认</lego-button>
              <lego-button type="warning" icon="⚠">警告</lego-button>
              <lego-button type="danger" icon="🗑">删除</lego-button>
            </div>
            <div class="demo-code">
              <pre><code>&lt;lego-button icon="🔍"&gt;搜索&lt;/lego-button&gt;
&lt;lego-button type="primary" icon="📝"&gt;编辑&lt;/lego-button&gt;
&lt;lego-button type="success" icon="✓"&gt;确认&lt;/lego-button&gt;
&lt;lego-button type="warning" icon="⚠"&gt;警告&lt;/lego-button&gt;
&lt;lego-button type="danger" icon="🗑"&gt;删除&lt;/lego-button&gt;</code></pre>
            </div>
          </div>

          <!-- Button 属性 -->
          <h2>Button 属性</h2>
          <table class="props-table">
            <thead>
              <tr>
                <th>属性名</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="code">type</span></td>
                <td>按钮类型</td>
                <td>string</td>
                <td>default / primary / success / warning / danger / info</td>
                <td>default</td>
              </tr>
              <tr>
                <td><span class="code">size</span></td>
                <td>按钮尺寸</td>
                <td>string</td>
                <td>large / medium / small / mini</td>
                <td>medium</td>
              </tr>
              <tr>
                <td><span class="code">plain</span></td>
                <td>是否朴素按钮</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
              <tr>
                <td><span class="code">round</span></td>
                <td>是否圆角按钮</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
              <tr>
                <td><span class="code">circle</span></td>
                <td>是否圆形按钮</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
              <tr>
                <td><span class="code">disabled</span></td>
                <td>是否禁用状态</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
              <tr>
                <td><span class="code">loading</span></td>
                <td>是否加载中状态</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
              <tr>
                <td><span class="code">text</span></td>
                <td>按钮文字</td>
                <td>string</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><span class="code">icon</span></td>
                <td>图标</td>
                <td>string</td>
                <td>—</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>

          <!-- Button 事件 -->
          <h2>Button 事件</h2>
          <table class="props-table">
            <thead>
              <tr>
                <th>事件名</th>
                <th>说明</th>
                <th>回调参数</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="code">click</span></td>
                <td>点击时触发</td>
                <td>(event: MouseEvent)</td>
              </tr>
            </tbody>
          </table>

          <!-- Button 插槽 -->
          <h2>Button 插槽</h2>
          <table class="props-table">
            <thead>
              <tr>
                <th>插槽名</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="code">default</span></td>
                <td>自定义默认内容</td>
              </tr>
              <tr>
                <td><span class="code">icon</span></td>
                <td>自定义图标</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// 文档站点主组件
</script> 