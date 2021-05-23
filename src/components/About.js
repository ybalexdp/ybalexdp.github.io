import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div class="about-content">
        <h1>About</h1>
        <p>Naoya Yabushita</p>
        <p>Tech Lead at MyRefer,Inc</p>
        <p>
          HR Tech系のベンチャーでTech
          Leadとして働いています。主戦場はインフラ/バックエンドです。
        </p>
        <p>
          最近はスクラムマスターや採用/マネジメント業の割合も増えていますが、SRE/Micorservicesといったキーワードに興味があります。
        </p>
        <h2>Skills</h2>
        <h3>Programming languages/Framework</h3>
        <p>go, php, python, hack/hhvm, C, HTML/CSS/Javascript, jQuery, node.js, FuelPHP, React, TypeScript</p>
        <h3>Infrastructure</h3>
        <h4>AWS</h4>
        <p>EC2, S3, EKS, Athena, Glue, Lambda, Aurora, CloudFront, etc</p>
        <h4>Middleware/Monitering/CICD/etc</h4>
        <p>gRPC, Sensu, Datadog, Grafana, Fluentd, ElasticSearch, Kibana, OpenStack, Jenkins, Github Actions</p>
        <h4>Networking</h4>
        <p>VXLAN, OvS, DPDK</p>
        <h3>Certification</h3>
        <ul>
          <li>Certified Scrum Master</li>
          <li>ウイスキー検定 3級</li>
          <li>LPIC 1 etc</li>
        </ul>
        <h3>Introduction Article</h3>
        <ul>
          <li>
            <a href="https://www.wantedly.com/companies/myrefer/post_articles/179402" target="_blank">
              Wantedly
            </a>
          </li>
          <li>
            <a href="https://flxy.jp/article/8046" target="_blank">
              flexy
            </a>
          </li>
          <li>
            <a href="https://note.com/myrefer/n/n10e27f52f315" target="_blank">
              社内対談記事(前編)
            </a>
          </li>
          <li>
            <a href="https://note.com/myrefer/n/n242e494e7e02" target="_blank">
              社内対談記事(後編)
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
