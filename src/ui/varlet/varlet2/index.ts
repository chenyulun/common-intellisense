import { componentsReducer, propsReducer } from '../../utils'
import button from './button.json'
import vswitch from './switch.json'
import buttonGroup from './buttonGroup.json'
import checkbox from './checkbox.json'
import checkboxGroup from './checkboxGroup.json'
import form from './form.json'
import pagination from './pagination.json'
import tab from './tab.json'
import tabItem from './tabItem.json'
import tabs from './tabs.json'
import table from './table.json'
import breadcrumbs from './breadcrumbs.json'
import breadcrumb from './breadcrumb.json'
import card from './card.json'
import cell from './cell.json'
import chip from './chip.json'
import col from './col.json'
import row from './row.json'
import collapse from './collapse.json'
import collapseItem from './collapseItem.json'
import countdown from './countdown.json'
import counter from './counter.json'
import datePicker from './datePicker.json'
import divider from './divider.json'
import drag from './drag.json'
import ellipsis from './ellipsis.json'
import fab from './fab.json'
import formDetails from './formDetails.json'
import imagePreview from './imagePreview.json'
import indexBar from './indexBar.json'
import indexAnchor from './indexAnchor.json'
import input from './input.json'
import link from './link.json'
import list from './list.json'
import loading from './loading.json'
import menu from './menu.json'
import overlay from './overlay.json'
import paper from './paper.json'
import picker from './picker.json'
import popup from './popup.json'
import progress from './progress.json'
import pullRefresh from './pullRefresh.json'
import rate from './rate.json'
import result from './result.json'
import select from './select.json'
import skeleton from './skeleton.json'
import slider from './slider.json'
import snackbar from './snackbar.json'
import space from './space.json'
import step from './step.json'
import steps from './steps.json'
import sticky from './sticky.json'
import swipe from './swipe.json'
import swipeItem from './swipeItem.json'
import tabsItems from './tabsItems.json'
import timePicker from './timePicker.json'
import tooltip from './tooltip.json'
import uploader from './uploader.json'

export function varlet2() {
  const map: any = [
    button,
    vswitch,
    buttonGroup,
    checkbox,
    checkboxGroup,
    form,
    pagination,
    tab,
    tabItem,
    tabs,
    table,
    breadcrumbs,
    breadcrumb,
    card,
    cell,
    chip,
    col,
    row,
    collapse,
    collapseItem,
    countdown,
    counter,
    datePicker,
    divider,
    drag,
    ellipsis,
    fab,
    formDetails,
    imagePreview,
    indexBar,
    indexAnchor,
    input,
    link,
    list,
    loading,
    menu,
    overlay,
    paper,
    picker,
    popup,
    progress,
    pullRefresh,
    rate,
    result,
    select,
    skeleton,
    slider,
    snackbar,
    space,
    step,
    steps,
    sticky,
    swipe,
    swipeItem,
    tabsItems,
    timePicker,
    tooltip,
    uploader,
  ]

  return propsReducer(map)
}

export function varlet2Components() {
  const map = [
    ['var-button', '按钮', '<var-button>默认按钮</var-button>'],
    ['var-switch', '开关', '<var-switch v-model="value" />'],
    ['var-button-group', '按钮组', `<var-button-group type="primary" mode="text">
  <var-button>按钮</var-button>
  <var-button>按钮</var-button>
  <var-button>按钮</var-button>
</var-button-group>`],
    ['var-checkbox', '复选框', '<var-checkbox v-model="value">当前的值: {{ value }}</var-checkbox>'],
    ['var-checkbox-group', '复选框组', `<var-checkbox-group
  v-model="value"
  :rules="[v => v.length === 2 || '请全选']"
>
  <var-checkbox :checked-value="0">吃饭</var-checkbox>
  <var-checkbox :checked-value="1">睡觉</var-checkbox>
</var-checkbox-group>`],
    ['var-form', '表单', `<var-form 
    ref="form" 
    :disabled="disabled"
    :readonly="readonly" 
    scroll-to-error="start"
  ></var-form>`],
    ['var-pagination', '分页', '<var-pagination :current="3" :total="120" />'],
    ['var-tabs', '选项卡组', `<var-tabs
  elevation
  color="var(--color-primary)"
  active-color="#fff"
  inactive-color="hsla(0, 0%, 100%, .6)"
  disabled-color="#aaa"
  v-model:active="active"
>
  <var-tab>选项1</var-tab>
  <var-tab>选项2</var-tab>
  <var-tab disabled>禁用选项</var-tab>
</var-tabs>`],
    ['var-tab', '选项卡', '<var-tab>选项1</var-tab>'],
    ['var-tab-item', '选项卡', '<var-tab-item>选项1</var-tab-item>'],
    ['var-table', '表格', '<var-table>选项1</var-table>'],
    ['var-breadcrumbs', '面包屑', '<var-breadcrumbs></var-breadcrumbs>'],
    ['var-breadcrumb', '面包屑', '<var-breadcrumb></var-breadcrumb>'],
    ['var-card', '卡片', `<var-card
  title="本草纲目"
  description="如果华佗再世,崇洋都被医治,外邦来学汉字,激发我民族意识。马钱子、决明子、苍耳子，还有莲子；黄药子、苦豆子、川楝子，我要面子。用我的方式，改写一部历史。没什么别的事，跟着我念几个字。山药当归枸杞 GO，山药 当归 枸杞 GO，看我抓一把中药，服下一帖骄傲~"
/>`],
    ['var-cell', '单元格', '<var-cell>这是单元格</var-cell>'],
    ['var-chip', '纸片', '<var-chip>默认纸片</var-chip>'],
    ['var-col', '布局 提供 span 属性设置这一列所占的份数，offset 属性设置这一列偏移的份数。', '<var-col :span="8">span: 8</var-col>'],
    ['var-row', '布局 组件把一行平均划分为 24列 栅格( 24份 )', '<var-row></van-row>'],
    ['var-collapse', '折叠面板 可以折叠/展开的内容区域。', '<var-collapse v-model="value" @change="changeHandle"></van-row>'],
    ['var-collapse', '折叠面板 可以折叠/展开的内容区域。', '<var-collapse-item title="标题" name="1">文本</var-collapse-item>'],
    ['var-countdown', '倒计时 用于实时展示倒计时数值，支持毫秒精度。', '<var-countdown :time="time" />'],
    ['var-counter', '计数器', '<var-counter v-model="value"/>'],
    ['var-date-picker', '日期选择器 用于选择日期或日期范围。', '<var-date-picker v-model="date" />'],
    ['var-divider', '分割线 用于分隔列表或布局的各个部分。', '<var-divider />'],
    ['var-drag', '拖拽 使元素可以自由拖拽。', `<var-drag>
  <var-button type="primary">基本使用</var-button>
</var-drag>`],
    ['var-ellipsis', '文本省略 主要用于省略单行文字和多行文字。', `<var-ellipsis style="max-width: 170px">
  其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
</var-ellipsis>`],
    ['var-fab', '悬浮动作按钮 悬浮动作按钮组件，按下可显示一组动作按钮。', '<var-fab :type="type" />'],
    ['var-form-details', '表单 提供了对所有表单组件进行控制的能力。', '<var-form-details :error-message="errorMessage" :extra-message="extraMessage" />'],
    ['var-image-preview', '图片预览 图片放大预览，支持双击倍数放大，支持函数调用和组件调用两种方式。', '<var-image-preview :images="images" v-model:show="show" />'],
    ['var-index-bar', '索引栏 用于跳转到页面指定位置。', '<var-index-bar duration="300" @change="change"></var-index-bar>'],
    ['var-index-anchor', '索引栏 用于跳转到页面指定位置。', `<var-index-anchor :index="item" class="anchor">
  标题 {{ item }}
</var-index-anchor>`],
    ['var-input', '输入框 输入框的行为和基本原生一致，用户输入时始终获得一个符合 type 规则的字符串，可选择 standard 和 outlined 两种风格，默认为 standard。', '<var-input placeholder="请输入文本" v-model="value" />'],
    ['var-link', '链接 链接组件，用于页面跳转。', '<var-link>默认链接</var-link>'],
    ['var-list', '无限滚动列表 无限滚动加载列表、触底加载，支持手动检查位置并加载。支持自定义加载状态、错误状态、数据加载完成状态。', `<var-list
  :finished="finished"
  v-model:loading="loading"
  @load="load"
>
  <var-cell :key="item" v-for="item in list">
    列表项: {{ item }}
  </var-cell>
</var-list>`],
    ['var-loading', '加载 加载组件，用于数据加载时执行动画。', '<var-loading type="circle" />'],
    ['var-menu', '菜单 当元素点击时显示一个菜单，通过控制弹出位置和偏移量改变菜单的显示位置。', '<var-menu></var-menu>'],
    ['var-overlay', '遮罩层 创建一个遮罩层，用于强调特定的页面元素。', '<var-overlay v-model:show="show" />'],
    ['var-paper', '纸张 创建一个更容易的使用海拔效果和水波效果的容器', '<var-paper :elevation="2" :width="100" :height="100" ripple />'],
    ['var-picker', '多列选择器 提供了函数和组件两种调用方式。同时支持级联模式，可以处理多级联动。', '<var-picker :columns="columns" />'],
    ['var-popup', '弹出层 创建一个可以从上、下、左、右、中心弹出的容器，用于展示信息。默认使用 teleport 插入到 body 尾部。', '<var-popup v-model:show="center"></var-popup>'],
    ['var-progress', '进度条 展示操作的当前进度。', '<var-progress :value="20" />'],
    ['var-pull-refresh', '下拉刷新 用于提供下拉刷新的交互操作', ' <var-pull-refresh v-model="isRefresh" @refresh="refresh"></var-pull-refresh>'],
    ['var-rate', '评分', '<var-rate v-model="score" :count="8"/>'],
    ['van-result', '结果 用于向用户展示结果。', `<var-result 
  type="success" 
  title="成功"
  description="嗨~ 我是结果页的一段描述~"
>
  <template #footer>
    <var-button type="success">知道了</var-button>
  </template>
</var-result>`],
    ['van-select', '选择框 通过下拉菜单展示并选择内容。', `<var-select placeholder="文本关联值" v-model="value2">
  <var-option label="吃饭" :value="1" />
  <var-option label="睡觉" :value="2" />
</var-select>`],
    ['van-skeleton', '骨架屏 显示一些带过渡效果的占位元素，优化加载过程。', '<var-skeleton :loading="loading">加载的数据</var-skeleton>'],
    ['van-slider', '滑块 用于在给定范围内取值。', '<var-slider v-model="value" />'],
    ['van-snackbar', '消息条 用于向用户显示快速消息。', '<var-snackbar v-model:show="show">这是一个消息条！！</var-snackbar>'],
    ['van-space', '间隔 组件库提供了 <var-space> 布局的组件，使您更有效率的进行 flex 布局。', '<var-space></var-space'],
    ['van-steps', '步骤条 引导用户按照流程完成任务的导航条。', `<var-steps :active="active">
  <var-step>步骤1</var-step>
  <var-step>步骤2</var-step>
  <var-step>步骤3</var-step>
  <var-step>步骤4</var-step>
</var-steps>`],
    ['van-step', '步骤条 引导用户按照流程完成任务的导航条。', '<var-step>步骤1</var-step>'],
    ['van-sticky', '粘性布局 粘性布局默认使用监听容器滚动事件的 scroll 模式，如有需要可以切换成基于 css sticky 的模式来提升性能。', `<var-sticky :offset-top="54">
  <var-button type="primary">基本使用</var-button>
</var-sticky>`],
    ['van-swipe', '轮播', `<var-swipe class="swipe-example">
<var-swipe-item>
  <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
</var-swipe-item>
</var-swipe>`],
    ['van-swipe-item', '轮播', `<var-swipe-item>
  <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
</var-swipe-item>`],
    ['van-tabs-items', '选项卡组 使用 Tabs、Tab 实现选项卡组的切换。使用 TabsItems、TabItem 实现和选项卡组的视图联动', `<var-tabs-items v-model:active="active">
  <var-tab-item>
    呜啦啦啦火车笛，随着奔腾的马蹄。 小妹妹吹着口琴，夕阳下美了剪影。 我用子弹写日记，介绍完了风景。
    接下来换介绍我自己。 我虽然是个牛仔，在酒吧只点牛奶。 为什么不喝啤酒，因为啤酒伤身体。
  </var-tab-item>
</var-tabs-items`],
    ['van-time-picker', '时间选择器 用于选择时间。', '<var-time-picker v-model="date" />'],
    ['van-tooltip', '提示 当元素点击或悬停时显示一个提示，通过控制弹出位置和偏移量改变提示的显示位置。', `<var-tooltip content="Tooltip">
  <var-button type="primary">基本使用</var-button>
</var-tooltip>`],
    ['van-uploader', '文件上传 提供了文件读取、图片/视频预览能力。 通过监听 after-read 事件获取文件上传服务器。', '<var-uploader v-model="files" @after-read="handleAfterRead"/>'],

  ]
  return componentsReducer(map)
}
