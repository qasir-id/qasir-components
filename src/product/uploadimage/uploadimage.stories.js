import React from 'react';
import { storiesOf } from '@storybook/react';

import UploadImage from './uploadimage';
import UploadImageSkeleton from './uploadimage.skeleton';

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Upload Image
---
This component extended from antd upload, follow this link https://ant.design/components/upload/ to see more details about props for component customization
~~~js
import { UploadImage, UploadImageSkeleton } from 'qasir/lib/finance';
~~~

or

~~~js
import { UploadImage, UploadImageSkeleton } from 'qasir/lib/finance/uploadimage';
~~~

Examples
~~~js
<UploadImage
    name="ktp"
    label="Unggah Gambar"
    changeLabel="Unggah Ulang"
    actionAPI="https://www.mocky.io/v2/5cc8019d300000980a055e76"
/>
~~~
Skeleton
~~~js
<UploadImageSkeleton />
~~~
`;

storiesOf('product|UploadImage', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => (
    <div style={{ maxWidth: 150, margin: 'auto' }}>
      <UploadImage
        name="ktp"
        label="Unggah Gambar"
        changeLabel="Unggah Ulang"
        actionAPI="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      />
    </div>
  ))
  .add('skeleton', () => (
    <div style={{ maxWidth: 150, margin: 'auto' }}>
      <UploadImageSkeleton />
    </div>
  ));
