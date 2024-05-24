import { NewsletterEntity } from "./newsletter_entitie";
import { UserEntity } from "./user_entitie";

export abstract class SubscriptionEntity {
  id: number;
  userId: number;
  newsletterId: number;
  user: UserEntity;
  Newsletter: NewsletterEntity;

  constructor(
    id: number,
    userId: number,
    newsletterId: number,
    user: UserEntity,
    Newsletter: NewsletterEntity
  ) {
    this.id = id;
    this.userId = userId;
    this.newsletterId = newsletterId;
    this.user = user;
    this.Newsletter = Newsletter;
  }
}