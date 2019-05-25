export const imports = {
  'components/get-started.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-get-started" */ 'components/get-started.mdx'
    ),
  'components/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-index" */ 'components/index.mdx'
    ),
  'components/Alert/Alert.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-alert-alert" */ 'components/Alert/Alert.mdx'
    ),
  'components/Button/Button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-button-button" */ 'components/Button/Button.mdx'
    ),
  'components/Card/Card.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-card-card" */ 'components/Card/Card.mdx'
    ),
  'components/Avatar/Avatar.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-avatar-avatar" */ 'components/Avatar/Avatar.mdx'
    ),
  'components/Chip/Chip.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-chip-chip" */ 'components/Chip/Chip.mdx'
    ),
  'components/Divider/Divider.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-divider-divider" */ 'components/Divider/Divider.mdx'
    ),
  'components/List/List.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-list-list" */ 'components/List/List.mdx'
    ),
  'components/NavBar/NavBar.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-nav-bar-nav-bar" */ 'components/NavBar/NavBar.mdx'
    ),
  'components/Radio/Radio.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-radio-radio" */ 'components/Radio/Radio.mdx'
    ),
  'components/Progress/Progress.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-progress-progress" */ 'components/Progress/Progress.mdx'
    ),
}
