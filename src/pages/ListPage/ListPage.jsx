import React from 'react'
import { Tabs, TabPane } from '@douyinfe/semi-ui';
import { IconDesktop,IconSignal} from '@douyinfe/semi-icons';
import TableComponents from '../../components/TableComponents';

export default function ListPage() {
  return (
    <div className='listPage'>
      <Tabs>
        <TabPane tab={<span><IconDesktop />CPU</span>} itemKey="1" >
            <TableComponents/>
        </TabPane>
        <TabPane tab={<span><IconDesktop />GPU</span>} itemKey="2" >
            <TableComponents/>
        </TabPane>
        <TabPane tab={<span><IconDesktop />OTHER</span>} itemKey="3" >
          <TableComponents/>
        </TabPane>
    </Tabs>
    </div>
  )
}
