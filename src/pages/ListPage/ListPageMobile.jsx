import React from 'react'
import { Tabs, TabPane } from '@douyinfe/semi-ui';
import { IconDesktop,IconSignal} from '@douyinfe/semi-icons';
import TableComponents from '../../components/TableComponents';

export default function ListPage() {
  return (
    <div className='listPageMobile'>

          <Tabs tabPosition='top'>
              <TabPane tab={<span><IconSignal />安卓</span>}itemKey="6">
                    <TableComponents/>
              </TabPane>
              <TabPane tab={<span><IconSignal />IOS</span>}itemKey="7">
                    <TableComponents/>
              </TabPane>
              <TabPane tab={<span><IconSignal />综合</span>}itemKey="8">
                    <TableComponents/>
              </TabPane>
            </Tabs>
    </div>
  )
}
