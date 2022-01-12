import { Container } from 'inversify';
import { AppController } from '../data/app.controller';
import { ChatStore } from '../data/chat.store';
import { UserStore } from '../data/user';
import { TYPES } from './types';

const reactContainer = new Container();

reactContainer.bind<UserStore>(TYPES.UserStore).to(UserStore).inSingletonScope();
reactContainer.bind<ChatStore>(TYPES.ChatStore).to(ChatStore).inSingletonScope();
reactContainer.bind<AppController>(TYPES.AppController).to(AppController).inSingletonScope();

export default reactContainer;
