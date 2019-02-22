import React from 'react';
import { Button, Row, Col, Table, Dropdown, Menu, Icon } from 'antd';
import { storiesOf } from '@storybook/react';
function handleInteraction(record){
    switch (record.interaction) {
        case 1:
        return <span className="badge badge-pill badge-primary-custom font-size-14 mr-4">{record.interaction_text}</span>;
        case 2:
        return <span className="badge badge-pill badge-warning-custom font-size-14 mr-4">{record.interaction_text}</span>;
        case 3:
        return <span className="badge badge-pill badge-danger-custom font-size-14 mr-4">{record.interaction_text}</span>;
        case 4:
        return <span className="badge badge-pill badge-success-custom font-size-14 mr-4">{record.interaction_text}</span>;
        case 5:
        return <span className="badge badge-pill badge-default-custom font-size-14 mr-4">{record.interaction_text}</span>;
    }
}
function menu(record) {
    return (
        <Menu>
            <Menu.Item key="1" onClick={''}>Ubah Aktivitas</Menu.Item>
            <Menu.Item key="2" onClick={''}>Detail Aktivitas</Menu.Item>
        </Menu>
    )
}
function generateColumActivity() {
    return [
        {
            title: 'AKTIVITAS',
            key: 'activity',
            render: (record) => {
                if (!record.date) {
                  return handleInteraction(record);
                }else{
                    return {
                        children: <span>{record.date}</span>,
                        props: {
                          colSpan: 3,
                          style: {background: '#dbe7ff'}
                        },
                    };
                }
              },      
        }, {
            title: 'Catatan',
            key: 'notes',
            render: (record) => {
                if (!record.date) {
                    return <span>{record.notes}</span>
                }else{
                    return {
                        props: {
                          colSpan: 0,
                        },
                    };
                }
            }
        }, {
            title: 'ACTION',
            key: 'action',
            render: (record) => {
                if (!record.date) {
                    return <span>
                                <Dropdown overlay={menu(record)}>
                                    <Button style={{color:"#e34225", borderColor: "#e34225", fontWeight: "500"}}>
                                        Actions
                                        <Icon type="down"/>
                                    </Button>
                                </Dropdown>
                            </span>
                }else{
                    return {
                        props: {
                          colSpan: 0,
                        },
                    };
                }
            }
        }
    ]
};
const data = [{date: '23 februari', notes:'coba',interaction: 2},
{date: '', notes:'coba',interaction: 1, interaction_text:'primary'},
{date: '', notes:'coba',interaction: 2, interaction_text:'warning'},
{date: '', notes:'coba',interaction: 3, interaction_text:'danger'},
{date: '', notes:'coba',interaction: 4, interaction_text:'success'},
{date: '', notes:'coba',interaction: 4, interaction_text:'default'}];
storiesOf('Table', module)
.add('default', () => 
	<Table 
	    columns={generateColumActivity()} 
	    loading={false} 
	    dataSource={data} 
	    pagination={true}
	/>
);