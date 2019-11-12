import React from 'react';
import styled from 'styled-components';

import useForm from 'react-hook-form';

import {
  Input,
  InputPassword,
  Textarea,
  Button,
  Text,
  Checkbox
  // eslint-disable-next-line import/no-useless-path-segments
} from '../../base';

import Select from '../select';

const Option = Select;

// const options = [
//   { name: 'Pelajar', value: '01' },
//   { name: 'Mahasiswa', value: '02' },
//   { name: 'Wiraswasta', value: '03' },
//   { name: 'Konglongmerat', value: '04' }
// ];

export const CardBox = styled.div`
  padding: 12px;
  overflow: hidden;
`;

export const Fieldset = styled.div`
  margin-bottom: 20px;
`;

// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { vals: 'hoi' };
//   }
//   handleClear = e => {
//     console.log(this.state.vals);
//     this.setState({ vals: '' });
//   };

//   handleInputChange = e => {
//     this.setState({
//       vals: e.target.value
//     });
//   };
//   render() {
//     return (
//       <Fieldset>
//         <Input label="Search" name="search" value={this.state.vals} onChange={this.handleInputChange} />
//         <input value={this.state.vals} />
//         <span onClick={this.handleClear}>clear</span>
//       </Fieldset>
//     );
//   }
// }

// export default Form;

export default function Form() {
  const { register, handleSubmit, errors, setValue } = useForm({
    mode: 'onBlur'
  });
  const onSubmit = data => {
    console.log(data);
  };

  const handleOnchage = () => {
    console.log('asd');
  };

  const handleSelect = e => {
    setValue('AntdSelect', e);
    console.log(e);
  };

  React.useEffect(() => {
    register({ name: 'AntdSelect' }); // custom register antd input
  }, [register]);

  return (
    <>
      <div style={{ minHeight: '100vh', background: '#EEE', padding: 40 }}>
        <div
          style={{
            background: 'white',
            padding: 40,
            maxWidth: 767,
            margin: 'auto'
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Text variant="h2">Sign Up</Text>
            <Fieldset>
              <Input
                label="Nama"
                name="nama"
                ref={register({ required: true })}
                error={errors.nama && true}
                errorMessage={errors.nama && 'Wajib diisi sob'}
              />
            </Fieldset>
            <Fieldset>
              <Input
                label="Search"
                name="search"
                type="search"
                ref={register({ required: true })}
                error={errors.search && true}
                errorMessage={errors.search && 'Wajib diisi sob'}
              />
            </Fieldset>
            <Fieldset>
              <Input
                label="Email"
                name="email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                error={errors.email && true}
                errorMessage={errors.email && 'formatnya salah sob'}
              />
            </Fieldset>

            <Fieldset>
              <InputPassword
                label="Password"
                name="password"
                ref={register({ required: true, minLength: 6 })}
                error={errors.password && true}
                errorMessage={errors.password && 'minimal 6 karakter'}
              />
            </Fieldset>

            <Fieldset>
              <Textarea
                label="Address"
                name="address"
                onChange={handleOnchage}
                ref={register({ required: true })}
                error={errors.address && true}
                errorMessage={errors.address && 'alamatnya diisi dong pak'}
              />
            </Fieldset>

            <Fieldset>
              <Select placeholder="Select a person" onChange={handleSelect}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </Select>
              {errors.AntdSelect && 'masukin kotanya dulu bosque'}
            </Fieldset>

            <Fieldset>
              <Checkbox
                id="agree"
                name="agree"
                labelText="saya setuju dengan syarat dan ketentuan yang berlaku"
                ref={register({ required: true })}
                error={errors.agree && true}
                errorMessage={errors.agree && 'Cheklist dulu dong om'}
              />
            </Fieldset>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </>
  );
}
