import { SubscriptionEntity } from "../../domain/entities/subscription_entitie";
import { UserEntity } from "../../domain/entities/user_entitie";

export class UserModel implements UserEntity {
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

  static fromDataBase(json: { [key: string]: never }): UserModel {
    return new UserModel(
      json.id,
      json.email,
      json.unsubscribed,
      json.subscriptions
    );
  }
}