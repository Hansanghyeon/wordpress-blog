# mysql_secure_installation 이 무엇인가?

DB설치를 진행하면서 mysql_secure_installation 스크립트를 사용해야 한다 배웠다 그런데 배운지 정말 오래지나서 의문이 서버 설치진행하면서 모든 것들을 이해하면서 사용하지 않았어서 의문이 하나씩 생기고있다.

mysql 의 mysql_secure_installation
기능은 기본적인 보안을 강화 시켜주는 기능이라고 한다.

```bash
./mysql_secure_installation  ( 실행 )

NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MySQL
      SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!

In order to log into MySQL to secure it, we’ll need the current
password for the root user.  If you’ve just installed MySQL, and
you haven’t set the root password yet, the password will be blank,
so you should just press enter here.

Enter current password for root (enter for none):
OK, successfully used password, moving on…

Setting the root password ensures that nobody can log into the MySQL
root user without the proper authorisation.

Set root password? [Y/n] ## root 패스워드를 설정 할 것인지 물어본다.
 … skipping.

By default, a MySQL installation has an anonymous user, allowing anyone
to log into MySQL without having to have a user account created for
them.  This is intended only for testing, and to make the installation
go a bit smoother.  You should remove them before moving into a
production environment.

Remove anonymous users? [Y/n] ##  anonymous 유저를 삭제 할것인지 물어본다.
 … skipping.

Normally, root should only be allowed to connect from ‘localhost’.  This
ensures that someone cannot guess at the root password from the network.

Disallow root login remotely? [Y/n] ## root의 원격 접속을 허용할 것인지 물어본다.
 … skipping.

By default, MySQL comes with a database named ‘test’ that anyone can
access.  This is also intended only for testing, and should be removed
before moving into a production environment.

Remove test database and access to it? [Y/n] ## test 데이터베이스를 삭제 할것인지 물어본다.
 … skipping.

Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

Reload privilege tables now? [Y/n] ## privileges 테이블을 재 시작 할 것인지 물어본다.
 … skipping.

Cleaning up…

All done!  If you’ve completed all of the above steps, your MySQL
installation should now be secure.

Thanks for using MySQL!
```
