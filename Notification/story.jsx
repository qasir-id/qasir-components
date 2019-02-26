import React from 'react';
import { Menu, Form, Row, Col } from 'antd';
import Notification from './index';
import '../stories/style.scss'
class NotificationExample extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  handleListActivity() {
    const { dispatch } = this.props
    dispatch(push("/activity"))
  }
  listNotification(item) {
    switch (item.type) {
      case 1:
        return (<div className="topbar__activity__item" onClick={this.handleListActivity.bind(this)}>
          <i className="topbar__activity__icon icmn-users" />
          <div className="topbar__activity__inner">
            <div className="topbar__activity__title">
              <span className="pull-right">{item.activity.schedule_time}</span>
              <p>Aktivitas</p>
            </div>
            <div className="topbar__activity__descr">
              <span>{item.activity.notes}</span>
            </div>
          </div>
        </div>)
    }
  }
  render() {
    const { form, latlong } = this.props
    const notifications = [{id: '1', type: 1, activity: {schedule_time:'21 februari', note: 'coba' }},{id: '1', type: 1, activity: {schedule_time:'21 februari', note: 'coba' }},]
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Row >
            <Col span="20" offset={2}>
              <Menu selectable={false}>
                {notifications ? notifications.map(item =>
                  <Menu.Item key={item.id}>
                    <div className="topbar__activity">
                      {this.listNotification(item)}
                    </div>
                  </Menu.Item>
                ) : ""}
            </Menu>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
NotificationExample = Form.create()(NotificationExample);
export default NotificationExample;