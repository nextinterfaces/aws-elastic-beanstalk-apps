# AWS Elastic Beanstalk hello world apps

This repo contains sample hello world elastic beanstalk applications on variety of languages

## bash commands

```
ssh -i "~/.ssh/<the-aws-key-pair-pem-file>.pem" ec2-user@52.41.70.74 // depending on instance may be "ubuntu" user

// add the ssh-key in session
ssh-add -l
ssh-add ~/.ssh/<the-aws-key-pair-pem-file>.pem

// ssh key no longer needed
ssh ec2-user@52.41.70.74
ssh ec2-user@ec2-52-25-101-175.us-west-2.compute.amazonaws.com

ssh ubuntu@52.25.101.175
```

## Elastic Beanstalk commands
```
eb init

// This may appear if first time access-id/secret-key is to be created:
You have not yet set up your credentials or your credentials are incorrect
You must provide your credentials.
(aws-access-id): <the aws access id e.g. 'ASDFASDFASDF'>
(aws-secret-key): <the aws secret-key e.g. 'AAAAAAA/BBBBBBBBBBBBBBBB'>

eb create <app-environment>

eb deploy <app-environment>
```

## Tutorials
- youtube: Amazon AWS Tutorial #1- Cloud Sysadmin - Your First EC2 Instance
- youtube: Amazon AWS Tutorial #2- Custom AMIs and Auto-Scaling Groups
- youtube: Amazon AWS Tutorial #3- Attaching an Elastic Load Balancer to your Auto-Scaling Group

