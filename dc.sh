# Bash Menu Script Example

PS3='docker-compose 실행할 모드: '
options=("up development" "down development" "up production" "down production")
select opt in "${options[@]}"; do
  case $opt in
  "up development")
    docker-compose -f ./docker/wp/docker-compose.dev.yaml up -d
    break
    ;;
  "down development")
    docker-compose -f ./docker/wp/docker-compose.dev.yaml down
    break
    ;;
  "up production")
    docker-compose -f ./docker/wp/docker-compose.yaml up -d
    break
    ;;
  "down production")
    docker-compose -f ./docker/wp/docker-compose.yaml down
    break
    ;;
  *) echo "invalid option $REPLY" ;;
  esac
done
