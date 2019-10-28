import React from 'react';
import styled from 'styled-components';

import useForm from 'react-hook-form';

import Input from '../input';
import InputPassword from '../input-password';
import Textarea from '../textarea';
import Button from '../button';
import Text from '../text';
import Select from '../select';
import Checkbox from '../checkbox';

export const CardBox = styled.div`
  padding: 12px;
  overflow: hidden;
`;

export const Fieldset = styled.div`
  margin-bottom: 20px;
`;

export default function Form() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

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
                ref={register({ required: true })}
                error={errors.address && true}
                errorMessage={errors.address && 'alamatnya diisi dong pak'}
              />
            </Fieldset>

            <Fieldset>
              <Select
                options={[
                  { label: 'One', value: 'one' },
                  { label: 'Two', value: 'two' },
                  { label: 'Three', value: 'three' }
                ]}
                label="Kota"
                name="kota"
                error={errors.kota && true}
                ref={register({ required: true })}
                errorMessage={errors.kota && 'masukin kotanya dulu bosque'}
              />
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
