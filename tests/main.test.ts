import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { User } from '../src/models/User';
import { Post } from '../src/models/Post';
describe('AppModule', () => {
  let app: TestingModule;
  beforeEach(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });
  it('should create a new user', async () => {
    const user = new User({ username: 'test', email: 'test@example.com', password: 'password' });
    await user.save();
    expect(user.username).toBe('test');
  });
  it('should create a new post', async () => {
    const post = new Post({ title: 'Test Post', content: 'This is a test post' });
    await post.save();
    expect(post.title).toBe('Test Post');
  });
});