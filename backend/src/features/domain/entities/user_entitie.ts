import { SubscriptionEntity } from "./subscription_entitie";

export abstract class UserEntity {
  id: number;
  email: string;
  unsubscribed: boolean;
  subscriptions: SubscriptionEntity[];

  constructor(
    id: number,
    email: string,
    unsubscribed: boolean,
    subscriptions: SubscriptionEntity[]
  ) {
    this.id = id;
    this.email = email;
    this.unsubscribed = unsubscribed;
    this.subscriptions = subscriptions;
  }

}