# Registration
---
### Post http://20.244.56.144/evaluation-service/register
Body:
{<br>
    "email": "2303031057078@paruluniversity.ac.in", <br>
    "name": "Priyanshu Raj",<br>
    "mobileNo": "6206698170",<br>
    "githubUsername": "Priyanshu845438",<br>
    "rollNo": "2303031057078",<br>
    "collegeName": "Parul University",<br>
    "accessCode": "TRzgWM"<br>
}

# Authantication
---
### Post http://20.244.56.144/evaluation-service/auth
Body:
{<br>
  "email": "2303031057078@paruluniversity.ac.in",<br>
  "name": "priyanshu raj",<br>
  "rollNo": "2303031057078",<br>
  "accessCode": "TRzgWM",<br>
  "clientID": "9797e6c1-61c4-4f15-8e40-02cd1aa0cf5e",<br>
  "clientSecret": "dURdvjskwWdaDNrK"<br>
}

# Logs
---
### http://20.244.56.144/evaluation-service/logs
Body:
{<br>
  "stack": "backend",<br>
  "level": "error",<br>
  "package": "handler",<br>
  "message": "received string, expected bool"<br>
}


---
# After hitting the apis
---

1. Create a folder inside reporsitory(2303031057078).
2. Use npm init -y
3. Create a logger.js file
4. Hit APIs using middlewares to give response in console as logs
5. Create one more file and test.js for routing
6. run test.js file.