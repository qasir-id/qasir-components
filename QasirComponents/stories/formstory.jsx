// import React from 'react';
import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import FormItemInputExample from '../FormItemInput/story'
import FormItemNumberExample from '../FormItemNumber/story'
import FormItemAddonExample from'../FormItemAddon/story'
import FormItemTextareaExample from'../FormItemTextarea/story'
import FormItemCheckboxExample from'../FormItemCheckbox/story'
import FormItemCheckboxGroupExample from'../FormItemCheckboxGroup/story'
import FormItemDatePickerExample from'../FormItemDatePicker/story'
import FormItemRangePicker from'../FormItemRangePicker/'
import FormItemSelectExample from'../FormItemSelect/story'
import FormItemSelect2Example from'../FormItemSelect2/story'
import FormItemEmailExample from'../FormItemEmail/story'
import FormItemSearchClickExample from'../FormItemSearchClick/story'
import FormItemSearchExample from'../FormItemSearch/story'
import FormItemHiddenExample from'../FormItemHidden/story'
import FormItemInputVerificationExample from'../FormItemInputVerification/story'
import FormItemMapMarkerExample from'../FormItemMapMarker/story'
import MapWithAMarkerExample from'../MapWithAMarker/story'
import FormItemPasswordxample from'../FormItemPassword/story'
import FormItemPasswordIconExample from'../FormItemPasswordIcon/story'
import FormItemUploadExample from'../FormItemUpload/story'
import FormItemUploadMultipleExample from'../FormItemUploadMultiple/story'
import NotificationExample from'../Notification/story'
import SearchBoxMaps from '../SearchBoxMaps'
import Select2AsyncExample from '../Select2Async/story'
import SpanAndBadgeExample from '../SpanAndBadge/story'

// import './formStyle.scss'
import { Form, Icon, Input, Button } from 'antd';
storiesOf('Form', module)
.add('item input', () => <FormItemInputExample />)
.add('item input verification', () => <FormItemInputVerificationExample />)
.add('item hidden', () => <FormItemHiddenExample />)
.add('item number', () => <FormItemNumberExample />)
.add('item email', () => <FormItemEmailExample />)
.add('item password', () => <FormItemPasswordxample />)
.add('item password icon', () => <FormItemPasswordIconExample />)
.add('item addon', () => <FormItemAddonExample />)
.add('item textarea', () => <FormItemTextareaExample />)
.add('item checkbox', () => <FormItemCheckboxExample />)
.add('item checkbox Group', () => <FormItemCheckboxGroupExample />)
.add('item Date Picker', () => <FormItemDatePickerExample />)
.add('item Range Picker', () => <FormItemRangePicker />)
.add('item select 1', () => <FormItemSelectExample />)
.add('item select 2', () => <FormItemSelect2Example />)
.add('item search', () => <FormItemSearchExample />)
.add('item search click', () => <FormItemSearchClickExample />)
.add('item Map Marker', () => <FormItemMapMarkerExample />)
.add('map with a marker', () => <MapWithAMarkerExample />)
.add('search box maps', () => <SearchBoxMaps />)
.add('item upload', () => <FormItemUploadExample />)
.add('item upload multiple', () => <FormItemUploadMultipleExample />)
.add('notification', () => <NotificationExample />)
.add('select 2 async', () => <Select2AsyncExample />)
.add('span and badge', () => <SpanAndBadgeExample />);