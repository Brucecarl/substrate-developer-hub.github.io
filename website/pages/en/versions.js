/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary");

const Container = CompLibrary.Container;

const CWD = process.cwd();

const versions = require(`${CWD}/versions.json`);

function Versions(props) {
  const { config: siteConfig } = props;
  const latestVersion = versions[0];
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer versionsContainer">
        <div className="post">
          <header className="postHeader">
            <h1>{siteConfig.title} Versions</h1>
          </header>
          <p>Versions of the Substrate Developer Hub documentation follow the released versions of Substrate.</p>
          <h3 id="latest">Current Stable Version</h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  <a
                    href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                      props.language ? props.language + "/" : ""
                    }`}
                  >
                    Documentation
                  </a>
                </td>
                <td>
                  <a href="https://github.com/paritytech/substrate/tree/3e651110aa06aa835790df63410a29676243fc54"
                    target="_blank">
                    Substrate Release
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <h3 id="rc">Pre-release Version</h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>master</th>
                <td>
                  <a
                    href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                      props.language ? props.language + "/" : ""
                    }next/`}
                  >
                    Documentation
                  </a>
                </td>
                <td>
                  <a href="https://github.com/paritytech/substrate/tree/master"
                    target="_blank">
                    Substrate Release
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>This documentation follows the latest version of Substrate in <code>master</code> branch.</p>

          <h3 id="archive">Past Versions</h3>
          <p>Here you can find previous versions of the documentation.</p>
          <table className="versions">
            <tbody>
              {versions.map(
                version =>
                  version !== latestVersion && (
                    <tr key={version}>
                      <th>{version}</th>
                      <td>
                        {/* You are supposed to change this href where appropriate
                        Example: href="<baseUrl>/docs(/:language)/:version/:id" */}
                        <a
                          href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                            props.language ? props.language + "/" : ""
                          }${version}/`}
                        >
                          Documentation
                        </a>
                      </td>
                      <td>
                        <a href={`https://github.com/paritytech/substrate/tree/v${version}`}
                          target="_blank">
                          Substrate Release
                        </a>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
          <p>
            You can find past versions of this project on{" "}
            <a href={repoUrl}>GitHub</a>.
          </p>
        </div>
      </Container>
    </div>
  );
}

module.exports = Versions;
