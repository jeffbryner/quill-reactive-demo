# quill-reactive-demo
Demo of the meteor quill-reactive package from https://github.com/jeffbryner/quill-reactive


You can test it out in two ways:

1) Online at http://quill-realtime-demo.jeffbryner.com:3000/
   - Note: this is a free tier AWS, ECS service..wildly underpowered for meteor and mongo
   - You will see edits from other folks on the internets so ..behave
   - Contents reset every 60 seconds because of ^^


2) Local build via docker https://hub.docker.com/r/0x7eff/quill-reactive-demo/:
   - docker pull 0x7eff/quill-reactive-demo
   - docker run -p80:3000 0x7eff/quill-reactive-demo
   - Firefox yourself to http://localhost in multiple windows or tabs and edit in realtime

