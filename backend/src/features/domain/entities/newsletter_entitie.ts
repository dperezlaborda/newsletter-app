import { SubscriptionEntity } from "./subscription_entitie";

export abstract class NewsletterEntity {
  id: number;
  title: string;
  content: string;
  sentAt: Date;
  subscriptions: SubscriptionEntity[];

  constructor(
    id: number,
    title: string,
    content: string,
    sentAt: Date,
    subscriptions: SubscriptionEntity[]
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.sentAt = sentAt;
    this.subscriptions = subscriptions;
  }
}