import React from 'react'
import { Tabs, TabPane } from '@douyinfe/semi-ui';
import { IconDesktop,IconSignal} from '@douyinfe/semi-icons';
import TableComponents from '../../components/TableComponents';

export default function ListPage() {
  return (
    <div className='listPageMobile'>

          <Tabs tabPosition='top'>
              <TabPane tab={<span><IconSignal />综合GB6（CPU）</span>}itemKey="6">
                    <TableComponents itemKey={6}/>
              </TabPane>
              <TabPane tab={<span><IconSignal />综合GFX（GPU）</span>}itemKey="7">
                    <TableComponents itemKey={7}/>
              </TabPane>
              <TabPane tab={<span><IconSignal />综合3DMark</span>}itemKey="8">
                    <TableComponents itemKey={8}/>
              </TabPane>
            </Tabs>
    </div>
  )
}
