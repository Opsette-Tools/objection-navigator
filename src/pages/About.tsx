import { Typography, Card, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { OpsetteFooterLogo } from '@/components/opsette-share';

const { Title, Paragraph } = Typography;

export default function About() {
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
        <Title level={3}>About Objection Navigator</Title>
        <Paragraph type="secondary" style={{ marginBottom: 12 }}>
          A business tool from Opsette Marketplace.
        </Paragraph>
        <Paragraph>
          Objection Navigator helps salespeople, founders, and service pros handle the most
          common objections in real time — with proven tactics they can say out loud without
          sounding scripted.
        </Paragraph>

        <Title level={5} style={{ marginTop: 16 }}>How it works</Title>
        <Paragraph>
          <ol style={{ paddingLeft: 20, margin: 0 }}>
            <li>Pick an objection from a category — or search for it.</li>
            <li>Choose your communication mode (cold call, email, in-person, etc.).</li>
            <li>Read the responses — each one tagged with a tone and a tactic.</li>
            <li>Copy the one that fits, or save it to your favorites for later.</li>
          </ol>
        </Paragraph>

        <Paragraph type="secondary" italic style={{ fontSize: 12, marginTop: 16 }}>
          Everything runs in your browser. Your favorites and theme are saved locally —
          nothing is sent to any server.
        </Paragraph>

        <OpsetteFooterLogo />
      </Card>
    </div>
  );
}
