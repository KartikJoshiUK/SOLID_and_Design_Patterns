// Correct: High-level module depends on an abstraction
interface NotificationService {
  sendNotification(message: string): void;
}

class EmailService implements NotificationService {
  public sendNotification(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

class User {
  constructor(private notificationService: NotificationService) {}

  public notify(message: string): void {
    this.notificationService.sendNotification(message);
  }
}

// Wrong: High-level module depends on a low-level module
class EmailService2 {
  public sendEmail(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

class User2 {
  constructor(private emailService: EmailService2) {}

  public notify(message: string): void {
    this.emailService.sendEmail(message);
  }
}
