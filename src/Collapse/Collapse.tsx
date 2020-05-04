import * as React from 'react'
import { List, CollapsibleList, SimpleListItem } from '@rmwc/list'
import classnames from 'classnames'

export const Collapse = (props) => {
  return (
    <List className={'cp-list'}>
      <CollapsibleList
        handle={
          <SimpleListItem text={'First Row'} graphic={'arrow_right'}>
            <div className={'header-right'}>
              <select onClick={(e) => e.stopPropagation()}>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>
          </SimpleListItem>
        }
      >
        <SimpleListItem className={'something'} text={'Inner row'} />
      </CollapsibleList>
      <hr/>
      <CollapsibleList
        handle={
          <SimpleListItem text={'Second Row'} graphic={'arrow_right'}>
            <div className={'header-right'}>
              {/* <span>Right item</span> */}
              <select onClick={(e) => e.stopPropagation()}>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>
          </SimpleListItem>
        }
      >
        <SimpleListItem className={'something'} text={'Inner row'} />
      </CollapsibleList>
      <hr/>
    </List>
  )
}