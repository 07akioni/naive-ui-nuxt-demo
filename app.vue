<template>
  <NConfigProvider inline-theme-disabled>
    <NMessageProvider>
      <NNotificationProvider>
        <NLoadingBarProvider>
          <NDialogProvider>
            <NSpace vertical>
              <NButton>Button</NButton>
              <NA>NA</NA>
              <NAffix />
              <NAlert />
              <NAnchor>
                <NAnchorLink />
              </NAnchor>
              <NBackTop />
              <NAutoComplete />
              <NAvatar />
              <NAvatarGroup />
              <NBadge />
              <NBlockquote />
              <NBreadcrumb>
                <NBreadcrumbItem />
              </NBreadcrumb>
              <NButtonGroup>
                <NButton>Button</NButton>
              </NButtonGroup>
              <NCalendar />
              <NCascader />
              <NCheckboxGroup>
                <NCheckbox />
              </NCheckboxGroup>
              <NRow>
                <NCol />
              </NRow>
              <NCollapse>
                <NCollapseItem />
              </NCollapse>
              <NCollapseTransition />
              <NColorPicker />
              <NCountdown />
              <NCard />
              <NCarousel>
                <NCarouselItem />
              </NCarousel>
              <NDataTable />
              <NDatePicker />
              <NDescriptions>
                <NDescriptionsItem />
              </NDescriptions>
              <NDialog />
              <NDivider />
              <NDrawer />
              <NDropdown>
                <NButton>Button</NButton>
              </NDropdown>
              <NDynamicInput />
              <NDynamicTags />
              <NForm>
                <NFormItem />
                <NFormItemRow>
                  <NFormItemCol />
                </NFormItemRow>
                <NGrid>
                  <NFormItemGi />
                  <NFormItemGridItem />
                  <NGi />
                  <NGridItem />
                </NGrid>
              </NForm>
              <NEl />
              <NEllipsis />
              <NEmpty />
              <NGlobalStyle />
              <NGradientText />
              <NH1>H1</NH1>
              <NHr />
              <NIcon />
              <NIconWrapper />
              <NImage
                width="100"
                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
              />
              <NImageGroup>
                <NImage
                  width="100"
                  src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                />
                <NImage
                  width="100"
                  src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                />
              </NImageGroup>
              <NInput />
              <NInputGroup />
              <NInputGroupLabel />
              <NInputNumber />
              <NLayout has-sider>
                <NLayoutSider />
                <NLayoutContent>
                  <NLayoutFooter />
                  <NLayoutHeader />
                </NLayoutContent>
              </NLayout>
              <NList>
                <NListItem>ListItem</NListItem>
              </NList>
              <NLog />
              <NMention />
              <NMenu />
              <NProgress />
              <NRadio />
              <NRadioButton />
              <!-- BUG -->
              <!-- <NRadioGroup>
                <NRadioButton />
                <NRadioButton />
              </NRadioGroup> -->
              <NRate />
              <NResult />
              <NScrollbar />
              <NSelect />
              <NSkeleton />
              <NSlider />
              <NSpin />
              <NStatistic />
              <NSteps>
                <NStep />
              </NSteps>
              <NSwitch />
              <NTabs>
                <NTabPane name="wow" />
              </NTabs>
              <NTable />
              <NTag />
              <NText />
              <NThing />
              <NTime />
              <NTooltip #trigger>
                <NButton>Tooltip</NButton>
              </NTooltip>
              <NTimePicker />
              <NTimeline>
                <NTimelineItem />
              </NTimeline>
              <NTransfer />
              <NTree />
              <NTreeSelect />
              <NUl>
                <NLi>Li</NLi>
              </NUl>
              <NUpload><NButton>Upload</NButton></NUpload>
              <NUpload><NUploadDragger>Upload</NUploadDragger></NUpload>
              <!-- BUG -->
              <!-- <NWatermark /> -->
              <NModal />
              <NNumberAnimation />
              <NOl><NLi>Li</NLi></NOl>
              <NP>NP</NP>
              <NPageHeader />
              <NPagination />
              <NPopconfirm #trigger>
                <NButton>NPopconfirm</NButton>
              </NPopconfirm>
              <NPopover #trigger>
                <NButton>NPopover</NButton>
              </NPopover>
              <NPopselect>
                <NButton>NPopselect</NButton>
              </NPopselect>
            </NSpace>
          </NDialogProvider>
        </NLoadingBarProvider>
      </NNotificationProvider>
    </NMessageProvider>
  </NConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  NConfigProvider,
  NButton,
  NSpace,
  NA,
  NAffix,
  NAlert,
  NAnchor,
  NBackTop,
  NAutoComplete,
  NAvatar,
  NAvatarGroup,
  NAnchorLink,
  NBadge,
  NBlockquote,
  NBreadcrumb,
  NBreadcrumbItem,
  NButtonGroup,
  NCalendar,
  NCascader,
  NCheckbox,
  NCheckboxGroup,
  NCol,
  NCollapse,
  NCollapseItem,
  NCollapseTransition,
  NColorPicker,
  NCountdown,
  NCard,
  NCarousel,
  NCarouselItem,
  NDataTable,
  NDatePicker,
  NDescriptions,
  NDescriptionsItem,
  NDialog,
  NDialogProvider,
  NDivider,
  NDrawer,
  NDropdown,
  NDynamicInput,
  NDynamicTags,
  NForm,
  NEl,
  NEllipsis,
  NEmpty,
  NFormItem,
  NFormItemCol,
  NFormItemGi,
  NFormItemGridItem,
  NFormItemRow,
  NGi,
  NGlobalStyle,
  NGradientText,
  NGrid,
  NGridItem,
  NH1,
  NHr,
  NIcon,
  NIconWrapper,
  NImage,
  NImageGroup,
  NInput,
  NInputGroup,
  NInputGroupLabel,
  NInputNumber,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NLayoutSider,
  NLi,
  NList,
  NListItem,
  NLoadingBarProvider,
  NLog,
  NMention,
  NMenu,
  NMessageProvider,
  NNotificationProvider,
  NModal,
  NNumberAnimation,
  NOl,
  NP,
  NPageHeader,
  NPagination,
  NPopconfirm,
  NPopover,
  NPopselect,
  NProgress,
  NRadio,
  NRadioButton,
  NRadioGroup,
  NRate,
  NResult,
  NScrollbar,
  NSelect,
  NSkeleton,
  NSlider,
  NSpin,
  NStatistic,
  NStep,
  NSteps,
  NSwitch,
  NTab,
  NTabPane,
  NTable,
  NTag,
  NText,
  NTabs,
  NThing,
  NTime,
  NTooltip,
  NTimePicker,
  NTimeline,
  NTimelineItem,
  NTransfer,
  NTree,
  NTreeSelect,
  NUl,
  NUpload,
  NUploadDragger,
  NWatermark,
  NRow,
} from "naive-ui";

export default defineComponent({
  components: {
    NConfigProvider,
    NButton,
    NSpace,
    NA,
    NAffix,
    NAlert,
    NAnchor,
    NBackTop,
    NAutoComplete,
    NAvatar,
    NAvatarGroup,
    NAnchorLink,
    NBadge,
    NBlockquote,
    NBreadcrumb,
    NBreadcrumbItem,
    NButtonGroup,
    NCalendar,
    NCascader,
    NCheckbox,
    NCheckboxGroup,
    NCol,
    NCollapse,
    NCollapseItem,
    NCollapseTransition,
    NColorPicker,
    NCountdown,
    NCard,
    NCarousel,
    NCarouselItem,
    NDataTable,
    NDatePicker,
    NDescriptions,
    NDescriptionsItem,
    NDialog,
    NDialogProvider,
    NDivider,
    NDrawer,
    NDropdown,
    NDynamicInput,
    NDynamicTags,
    NForm,
    NEl,
    NEllipsis,
    NEmpty,
    NRow,
    NFormItem,
    NFormItemCol,
    NFormItemGi,
    NFormItemGridItem,
    NFormItemRow,
    NGi,
    NGlobalStyle,
    NGradientText,
    NGrid,
    NGridItem,
    NH1,
    NHr,
    NIcon,
    NIconWrapper,
    NImage,
    NImageGroup,
    NInput,
    NInputGroup,
    NInputGroupLabel,
    NInputNumber,
    NLayout,
    NLayoutContent,
    NLayoutFooter,
    NLayoutHeader,
    NLayoutSider,
    NLoadingBarProvider,
    NLi,
    NList,
    NListItem,
    NNotificationProvider,
    NMessageProvider,
    NLog,
    NMention,
    NMenu,
    NProgress,
    NRadio,
    NRadioButton,
    NRadioGroup,
    NRate,
    NResult,
    NScrollbar,
    NSelect,
    NSkeleton,
    NSlider,
    NSpin,
    NStatistic,
    NStep,
    NSteps,
    NSwitch,
    NTab,
    NTabPane,
    NTable,
    NTag,
    NText,
    NTabs,
    NThing,
    NTime,
    NTooltip,
    NTimePicker,
    NTimeline,
    NTimelineItem,
    NTransfer,
    NTree,
    NTreeSelect,
    NUl,
    NUpload,
    NUploadDragger,
    NWatermark,
    NModal,
    NNumberAnimation,
    NOl,
    NP,
    NPageHeader,
    NPagination,
    NPopconfirm,
    NPopover,
    NPopselect,
  },
});
</script>

<style>
body {
  padding: 16px;
}
</style>
