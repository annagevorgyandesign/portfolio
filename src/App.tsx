import {
  DownloadOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons'
import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Layout,
  Row,
  Space,
  Tag,
  Timeline,
  Typography,
} from 'antd'
import { portfolioData } from './data/portfolio'

const { Header, Content, Footer } = Layout
const { Title, Paragraph, Text, Link } = Typography

const navItems = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const socialIconMap = {
  github: <GithubOutlined />,
  linkedin: <LinkedinOutlined />,
  mail: <MailOutlined />,
}

function App() {
  const { profile, socials, highlights, projects, experiences, skills, contact } = portfolioData

  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <div className="brand">{profile.name}</div>
        <nav className="top-nav">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </Header>

      <Content className="app-content">
        <section className="hero-section">
          <Space direction="vertical" size={10}>
            <Avatar size={70} className="hero-avatar">
              {profile.avatarText}
            </Avatar>
            <Title level={1}>{profile.name}</Title>
            <Title level={3} className="hero-role">
              {profile.title}
            </Title>
            <Text type="secondary">{profile.location}</Text>
            <Paragraph className="hero-about">{profile.about}</Paragraph>
            <Space wrap>
              {socials.map((social) => (
                <Button
                  key={social.label}
                  type="default"
                  icon={socialIconMap[social.icon]}
                  href={social.href}
                  target="_blank"
                >
                  {social.label}
                </Button>
              ))}
              {profile.resumeUrl && (
                <Button type="primary" icon={<DownloadOutlined />} href={profile.resumeUrl}>
                  Resume
                </Button>
              )}
            </Space>
          </Space>
        </section>

        <Row gutter={[16, 16]} className="highlight-grid">
          {highlights.map((item) => (
            <Col xs={24} sm={8} key={item.label}>
              <Card>
                <Text type="secondary">{item.label}</Text>
                <Title level={3} className="highlight-value">
                  {item.value}
                </Title>
              </Card>
            </Col>
          ))}
        </Row>

        <Divider />

        <section id="projects" className="section-block">
          <Title level={2}>Projects</Title>
          <Row gutter={[16, 16]}>
            {projects.map((project) => (
              <Col xs={24} md={12} lg={8} key={project.title}>
                <Card title={project.title} className="project-card">
                  <Paragraph>{project.description}</Paragraph>
                  <Space wrap>
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </Space>
                  <Space className="project-links">
                    {project.demoUrl && (
                      <Link href={project.demoUrl} target="_blank">
                        Live Demo
                      </Link>
                    )}
                    {project.repoUrl && (
                      <Link href={project.repoUrl} target="_blank">
                        Source Code
                      </Link>
                    )}
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        <Divider />

        <section id="experience" className="section-block">
          <Title level={2}>Experience</Title>
          <Timeline
            items={experiences.map((experience) => ({
              children: (
                <div>
                  <Title level={4}>{experience.role}</Title>
                  <Text type="secondary">
                    {experience.company} - {experience.period}
                  </Text>
                  <Paragraph>{experience.summary}</Paragraph>
                </div>
              ),
            }))}
          />
        </section>

        <Divider />

        <section id="skills" className="section-block">
          <Title level={2}>Skills</Title>
          <Row gutter={[16, 16]}>
            {skills.map((group) => (
              <Col xs={24} md={8} key={group.title}>
                <Card title={group.title}>
                  <Space wrap>
                    {group.items.map((skill) => (
                      <Tag key={skill} color="purple">
                        {skill}
                      </Tag>
                    ))}
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        <Divider />

        <section id="contact" className="section-block">
          <Title level={2}>Contact</Title>
          <Paragraph>{contact.note}</Paragraph>
          <Button type="primary" icon={<MailOutlined />} href={`mailto:${contact.email}`}>
            {contact.email}
          </Button>
        </section>
      </Content>

      <Footer className="app-footer">
        <Text type="secondary">
          Built with React, TypeScript, Vite, Ant Design, and pnpm.
        </Text>
      </Footer>
    </Layout>
  )
}

export default App
