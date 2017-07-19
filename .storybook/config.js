import './style/generic.reset.css'
import './style/generic.box-sizing.css'
import './style/generic.normalize.css'
import { configure } from '@kadira/storybook'

function loadStories () {
  require('../packages/Text/story.js')
  require('../packages/Button/story.js')
  require('../packages/UserAvatar/story.js')
  require('../packages/ActionBox/story.js')
  require('../packages/Input/story.js')
  require('../packages/icons/story.js')
  require('../packages/Modal/Confirmation/story.js')
  require('../packages/Modal/Content/story.js')
  require('../story.js')
}

configure(loadStories, module)
