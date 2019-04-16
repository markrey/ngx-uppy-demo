import { assert } from 'chai';
import 'mocha';
import * as fs from 'fs';
import { GitHubService } from '../../services/gitHubService';
import { GitHubResponse } from '../../interfaces/GitHubResponse';
require('dotenv').config({ path: __dirname + '/config/.env' });

describe('GitHub的操作', () => {
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const githubService = new GitHubService(clientId, clientSecret);

  console.log(`clientId:${clientId}`);
  console.log(`clientSecret:${clientSecret}`);

  beforeEach(() => {});

  it('上傳檔案', async () => {
    const buff = fs.readFileSync('d:\\log.xml');
    const fileData = {
      name: 'log.xml',
      data: buff
    };
    const owner = 'thomascsd';
    const repo = 'ngx-uppy-demo';

    const gitHubRes: GitHubResponse = await githubService.upload(
      fileData,
      owner,
      repo
    );

    assert.isNotNull(gitHubRes);
    assert.include(gitHubRes.content.name, 'log.xml', '檔案名是log.xml');
  });
});
