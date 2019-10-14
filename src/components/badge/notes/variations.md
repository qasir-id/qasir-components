# Badge Variations

Small notification like UI Element, used to catch user attention to a certain elements.

```javascript
import { Badge } from 'qasirc';
```

<br />

```html
<Badge count={9} />
```
<br />
```html
<Badge dot={true} />
```
<br />

## API

<table style="width: 100%">
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="color: #003a8c">count</td>
      <td>Notification count.</td>
      <td style="color: #c41d7f">number</td>
      <td>`0`</td>
    </tr>
    <tr>
      <td style="color: #003a8c">dot</td>
      <td>Whether to show notification number, or just small red dot to an element.</td>
      <td style="color: #c41d7f">bool</td>
      <td>`false`</td>
    </tr>
  </tbody>
</table>