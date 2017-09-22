import { Navigation, ScreenVisibilityListener } from 'react-native-navigation'
import Home from '../components/Home'
import Second from '../components/Second'

export function registerScreens(store, Provider) {
  Navigation.registerComponent('home', () => Home, store, Provider)
  Navigation.registerComponent('Second', () => Second, store, Provider)
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({ screen }) => console.log(`Displaying screen ${screen}`),
    didAppear: ({ screen, startTime, endTime, commandType }) =>
      console.log(
        'screenVisibility',
        `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`
      ),
    willDisappear: ({ screen }) =>
      console.log(`Screen will disappear ${screen}`),
    didDisappear: ({ screen }) => console.log(`Screen disappeared ${screen}`),
  }).register()
}
