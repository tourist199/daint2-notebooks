import React from 'react'
import { storiesOf } from '@storybook/react'

import { StateProvider, StateConsumer } from 'context/StateContext'
import { JsIcon, HtmlIcon, CssIcon, CodeIcon } from 'components/atoms/Icon/languages'

import MenuList, { MenuItem, MenuItemIcon, MenuItemText } from '..'

const menus = Array.from({ length: 10 }, (v, k) => k).map(value => (
  <MenuItem key={value}>MenuItem {value}</MenuItem>
))

storiesOf('MenuList', module)
  .add('default', () => (
    <MenuList>
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
    </MenuList>
  ))
  .add('with icon', () => (
    <MenuList>
      <MenuItem>
        <JsIcon width={20} height={20} />
        Javascript
      </MenuItem>
      <MenuItem>
        <HtmlIcon width={20} height={20} />
        Html
      </MenuItem>
      <MenuItem>
        <CssIcon width={20} height={20} />
        Css
      </MenuItem>
      <MenuItem>
        <CodeIcon width={20} height={20} />
        Other
      </MenuItem>
    </MenuList>
  ))
  .add('with icon (2)', () => (
    <MenuList>
      <MenuItem>
        <MenuItemIcon>
          <JsIcon width={20} height={20} />
        </MenuItemIcon>
        <MenuItemText>Javascript</MenuItemText>
      </MenuItem>
      <MenuItem>
        <MenuItemIcon>
          <HtmlIcon width={20} height={20} />
        </MenuItemIcon>
        <MenuItemText>Html</MenuItemText>
      </MenuItem>
      <MenuItem>
        <MenuItemIcon>
          <CssIcon width={20} height={20} />
        </MenuItemIcon>
        <MenuItemText>Css</MenuItemText>
      </MenuItem>
      <MenuItem>
        <MenuItemIcon>
          <CodeIcon width={20} height={20} />
        </MenuItemIcon>
        <MenuItemText>Other</MenuItemText>
      </MenuItem>
    </MenuList>
  ))
  .add('with menu in menu', () => (
    <StateProvider initialState={false}>
      <StateConsumer>
        {({ state: hasSubMenu, setState: showSubMenu }) => (
          <MenuList>
            <MenuItem>
              <MenuItemIcon>
                <JsIcon width={20} height={20} />
              </MenuItemIcon>
              <MenuItemText>Javascript</MenuItemText>
            </MenuItem>
            <MenuItem>
              <MenuItemIcon>
                <HtmlIcon width={20} height={20} />
              </MenuItemIcon>
              <MenuItemText>Html</MenuItemText>
            </MenuItem>
            <MenuItem>
              <MenuItemIcon>
                <CssIcon width={20} height={20} />
              </MenuItemIcon>
              <MenuItemText>Css</MenuItemText>
            </MenuItem>
            <MenuItem style={{ display: 'block' }}>
              <div onClick={() => showSubMenu(!hasSubMenu)} style={{ display: 'flex' }}>
                <MenuItemIcon>
                  <CodeIcon width={20} height={20} />
                </MenuItemIcon>
                <MenuItemText>Other</MenuItemText>
              </div>
              <MenuList>
                <MenuItem>
                  <MenuItemIcon>
                    <JsIcon width={20} height={20} />
                  </MenuItemIcon>
                  <MenuItemText>Javascript</MenuItemText>
                </MenuItem>
                <MenuItem>
                  <MenuItemIcon>
                    <HtmlIcon width={20} height={20} />
                  </MenuItemIcon>
                  <MenuItemText>Html</MenuItemText>
                </MenuItem>
                <MenuItem>
                  <MenuItemIcon>
                    <CssIcon width={20} height={20} />
                  </MenuItemIcon>
                  <MenuItemText>
                    <p>Css 1</p>
                    <p>Css 2</p>
                  </MenuItemText>
                </MenuItem>
              </MenuList>
              <MenuList>{menus}</MenuList>
            </MenuItem>
          </MenuList>
        )}
      </StateConsumer>
    </StateProvider>
  ))
