import React, {useState} from 'react';
import {Page, Card, FormLayout, TextField, Button} from '@shopify/polaris';
import {
  HideIcon
} from '@shopify/polaris-icons';

export default function ERPSettings() {
  const [ip, setIp] = useState('');
  const [port, setPort] = useState('');
  const [user, setUser] = useState('');
  const [password, setContrasena] = useState('');

  const handleSubmit = () => {
    
    console.log('Credenciales enviadas:', { ip, port, user, password });
  };

  return (
    <Page title="ERP settings" narrowWidth>
      <Card sectioned>
        <FormLayout>
          <TextField
            label="IP"
            value={ip}
            onChange={(value) => setIp(value)}
            autoComplete="off"
          />

          <TextField
            label="Puerto"
            value={port}
            onChange={(value) => setPort(value)}
            autoComplete="off"
          />

          <TextField
            label="Usuario"
            value={user}
            onChange={(value) => setUser(value)}
            autoComplete="off"
          />

          <TextField
            label="Contrasena"
            type="password"
            value={password}
            onChange={(value) => setContrasena(value)}
            autoComplete="off"
            source={HideIcon}

          />
          <Button submit onClick={handleSubmit}>
            Guardar
          </Button>
        </FormLayout>
      </Card>
    </Page>
  );
}