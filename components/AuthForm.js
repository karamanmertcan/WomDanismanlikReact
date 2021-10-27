import React from 'react';
import { Form, Button } from 'react-bootstrap';

const AuthForm = ({ register, handleSubmit, onSubmit, page, registerSubmit }) => {
  return (
    <div>
      <Form>
        {page === 'register' && (
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>İsim</Form.Label>
            <Form.Control type="text" placeholder="İsim giriniz" {...register('name')} />
          </Form.Group>
        )}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email giriniz" {...register('email')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Şifre</Form.Label>
          <Form.Control type="password" placeholder="Şifre" {...register('password')} />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="w-100"
          onClick={page === 'login' ? handleSubmit(onSubmit) : handleSubmit(registerSubmit)}>
          {page === 'register' ? 'Üye Ol' : 'Giriş Yap'}
        </Button>
      </Form>
    </div>
  );
};

export default AuthForm;
