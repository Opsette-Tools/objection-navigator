import { Typography, Card, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', padding: '20px 16px 60px' }}>
      <Button
        type="text"
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate('/')}
        style={{ marginBottom: 16 }}
      >
        Back
      </Button>
      <Card style={{ borderRadius: 14, maxWidth: 600, margin: '0 auto' }}>
        <Title level={3}>Privacy</Title>
        <Paragraph>
          <strong>No personal data is collected.</strong> This app does not require an account,
          login, or any personal information to use.
        </Paragraph>
        <Paragraph>
          <strong>Everything stays on your device.</strong> Your saved favorites and theme
          preference are stored locally in your browser using localStorage. Nothing is sent
          to a server.
        </Paragraph>
        <Paragraph>
          <strong>No tracking or analytics.</strong> We do not use cookies, analytics tools,
          or any form of user tracking.
        </Paragraph>
        <Paragraph>
          <strong>No data is sold or shared.</strong> Since we don't collect any data, there
          is nothing to sell or share with third parties.
        </Paragraph>
      </Card>
    </div>
  );
}
