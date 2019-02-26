import FormItemAddon from '../FormItemAddon';
import React from 'react';
import testComponentA11y from '../../lib/a11yTestHelper';

describe('FormItemAddon', () => {
  it('should pass accessibility audit', () => testComponentA11y(
    <FormItemAddon form={'form'} 
          defaultValue= "" 
          fieldName="business_name" 
          label="Nama Usaha" 
          message="Nama usaha wajib diisi"
          limitCharacter={{max:17, messageMax:"Maksimal 17 Karakter", min:5, messageMin:"Minimal 5 Karakter"}}
          autoComplete="off"/>,
    )
    .then(results => expect(results.violations.length).toBe(0)));
});
