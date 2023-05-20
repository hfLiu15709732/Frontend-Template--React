import React from 'react'
import { Tabs, TabPane } from '@douyinfe/semi-ui';
import { IconDesktop,IconSignal} from '@douyinfe/semi-icons';
import TableComponents from '../../components/TableComponents';

export default function ListPage() {
  return (
    <div className='listPage'>
      <Tabs>
        <TabPane tab={<span><IconDesktop />CPU-R23</span>} itemKey="1" >
            <TableComponents itemKey={1}/>
        </TabPane>
        <TabPane tab={<span><IconDesktop />CPU-R20</span>} itemKey="2" >
            <TableComponents itemKey={2}/>
        </TabPane>
        <TabPane tab={<span><IconDesktop />CPU-R15</span>} itemKey="3" >
            <TableComponents itemKey={3}/>
        </TabPane>
        <TabPane tab={<span><IconDesktop />GPU-TimeSpy</span>} itemKey="4" >
            <TableComponents itemKey={4}/>
        </TabPane>
        <TabPane tab={<span><IconDesktop />GPU-PassMark</span>} itemKey="5" >
            <TableComponents itemKey={5}/>
        </TabPane>

    </Tabs>
    </div>
  )
}
