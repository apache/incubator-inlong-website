# 总览
TubeMQ提供命令行工具来查看管理Topic，以及消息的生产与消费。
命令行工具tubectl可以在TubeMQ的bin目录运行。
用法
```
$ bin/tubectl [options] [command] [command options]
```
命令：

- topic
   - list
   - create
   - update
   - delete
- message
   - produce
   - consume
- cgroup
  - list
  - create
  - delete
> 同时也可以使用--help或者-h获取上述命令的帮助，例如：

```shell
$ bin/tubectl topic -h
```
# Topic
topic命令用于对TubeMQ内的topic进行管理，包括增删改查等等。  
命令：

- list
- update
- create
- delete
## list
```shell
$ bin/tubectl topic list
```
选项：

| 参数 | 描述 | 默认值 | 必需 |
| --- | --- | --- | --- |
| -n, --topicName | String. topic名称 |  |  |
| -sid, --topicStatusId | Int. topic记录状态 | 0 |  |
| -bid, --brokerId | String. broker的ID，多个broker之间以逗号间隔 |  |  |
| -dp, --deletePolicy | String. topic数据删除策略，类似"delete,168"定义 |  |  |
| -np, --numPartitions | Int. topic在该broker上的分区量 | 3 |  |
| -nts, --numTopicStores | Int. 允许建立Topic数据块和分区管理组的个数 | 1 |  |
| -uft, --unflushThreshold | Int. 最大允许的待刷新的记录条数 | 1000 |  |
| -ufi, --unflushInterval | Int. 最大允许的待刷新的间隔 | 10000 |  |
| -ufd, --unflushDataHold | Int. 缺省最大允许的待刷新数据大小 | 0 |  |
| -mc, --memCacheMsgCntInK | Int. 缺省最大内存缓存包量 | 10 |  |
| -ms, --memCacheMsgSizeInMB | Int. 缺省内存缓存包总的Size大小 | 2 |  |
| -mfi, --memCacheFlushIntvl | Int. 内存缓存最大允许的待刷新间隔 | 20000 |  |
| -c, --createUser | String. topic创建人 |  |  |
| -m, --modifyUser | String. topic修改人 |  |  |

## update
```shell
$ bin/tubectl topic update
```
选项：

| 参数 | 描述 | 默认值 | 必需 |
| --- | --- | --- | --- |
| -n, --topicName | String. topic名称 |  | 是 |
| -bid, --brokerId | String. broker的ID，多个broker之间以逗号间隔 |  | 是 |
| -m, --modifyUser | String. topic修改人 |  | 是 |
| -at, --confModAuthToken | String. 配置修改授权key |  | 是 |
| -dp, --deletePolicy | String. topic数据删除策略，类似"delete,168"定义 |  |  |
| -np, --numPartitions | Int. topic在该broker上的分区量 | 3 |  |
| -uft, --unflushThreshold | Int. 最大允许的待刷新的记录条数 | 1000 |  |
| -ufi, --unflushInterval | Int. 最大允许的待刷新的间隔 | 10000 |  |
| -ufd, --unflushDataHold | Int. 缺省最大允许的待刷新数据大小 | 0 |  |
| -nts, --numTopicStores | Int. 允许建立Topic数据块和分区管理组的个数 | 1 |  |
| -mc, --memCacheMsgCntInK | Int. 缺省最大内存缓存包量 | 10 |  |
| -ms, --memCacheMsgSizeInMB | Int. 缺省内存缓存包总的Size大小 | 2 |  |
| -mfi, --memCacheFlushIntvl | Int. 内存缓存最大允许的待刷新间隔 | 20000 |  |
| -ap, --acceptPublish | Boolean. topic是否接收发布请求 | true |  |
| -as, --acceptSubscribe | Boolean. topic是否接收订阅请求 | true |  |
| -mms, --maxMsgSizeInMB | Int. 最大消息包长设置 | 1 |  |
| -md, --modifyDate | String. 修改时间 |  |  |

## create
```shell
$ bin/tubectl create
```
选项：

| 参数 | 描述 | 默认值 | 必需 |
| --- | --- | --- | --- |
| -n, --topicName | String. topic名称 |  | 是 |
| -bid, --brokerId | String. broker的ID，多个broker之间以逗号间隔 |  | 是 |
| -c, --createUser | String. topic创建人 |  | 是 |
| -at, --confModAuthToken | String. 配置修改授权key |  | 是 |
| -dp, --deletePolicy | String. topic数据删除策略，类似"delete,168"定义 |  |  |
| -np, --numPartitions | Int. topic在该broker上的分区量 | -1 |  |
| -uft, --unflushThreshold | Int. 最大允许的待刷新的记录条数 | -1 |  |
| -ufi, --unflushInterval | Int. 最大允许的待刷新的间隔 | -1 |  |
| -ufd, --unflushDataHold | Int. 缺省最大允许的待刷新数据大小 | 0 |  |
| -nts, --numTopicStores | Int. 允许建立Topic数据块和分区管理组的个数 | 1 |  |
| -mc, --memCacheMsgCntInK | Int. 缺省最大内存缓存包量 | 10 |  |
| -ms, --memCacheMsgSizeInMB | Int. 缺省内存缓存包总的Size大小 | 2 |  |
| -mfi, --memCacheFlushIntvl | Int. 内存缓存最大允许的待刷新间隔 | 20000 |  |
| -ap, --acceptPublish | Boolean. topic是否接收发布请求 | true |  |
| -as, --acceptSubscribe | Boolean. topic是否接收订阅请求 | true |  |
| -mms, --maxMsgSizeInMB | Int. 最大消息包长设置 | 1 |  |
| -cd, --createDate | String. 创建时间 |  |  |

## delete
```shell
$ bin/tubectl topic delete
```
选项：

| 参数 | 描述 | 默认值 | 必需 |
| --- | --- | --- | --- |
| -o, --deleteOpt | String. 删除选项, 可选 { soft &#124; redo &#124; hard }，分别代表软删除、回滚和硬删除 | soft | 是 |
| -n, --topicName | String. topic名称 |  | 是 |
| -bid, --brokerId | String. broker的ID，多个broker之间以逗号间隔 |  | 是 |
| -m, --modifyUser | String. topic修改人 |  | 是 |
| -at, --confModAuthToken | String. 配置修改授权key |  | 是 |
| -md, --modifyDate | String. 修改时间 |  |  |

# Message
topic命令用于消息管理，包括生产和消费。   
命令：

- produce
- consume
## produce
```shell
$ bin/tubectl message produce
```
选项：

| 参数 | 描述                                                 | 默认值 | 必需 |
| --- |----------------------------------------------------| --- | --- |
| -n, --topicName | String. topic名称                                    |  | 是 |
| -ms, --master-servers | String. 连接的master地址, 格式为master1_ip:port\[,master2_ip:port\] |  | 是 |
| -m, --mode | String. 生产模式, 可选 { sync &#124; async }，分别代表同步和异步生产 | async                                                       |  |
| -t, --msgTotal | Long. 需要生产的消息总条数，-1代表不限制。                          | -1 |  |

## consume
```shell
$ bin/tubectl message consume
```
选项：

| 参数                                 | 描述                                                                           | 默认值 | 必需 |
|------------------------------------|------------------------------------------------------------------------------| --- | --- |
| -n, --topicName                    | String. topic名称                                                              |  | 是 |
| -g, --groupName                    | String. 消费者组                                                                 |  | 是 |
| -ms, --master-servers              | String. 连接的master地址,格式为master1_ip:port\[,master2_ip:port\]                   |  | 是 |
| -m, --mode                         | String. 消费模式，可选 { pull &#124; push &#124; balance },当指定了-po参数时，默认使用balance模式 | pull                                                       |  |
| -p, --consumePosition              | String. 消费位置，可选 { first &#124; latest &#124; max }                           | latest |  |
| -po, --consumePartitionsAndOffsets | String. 指定消费分区和offsets，格式为 id1:offset1\[,id2:offset2\]\[...\]，例如：0:0,1:0,2:0 |  |  |

# Cgroup
cgroup命令用于消费者组管理，目前支持查询、增加和删除。   
命令：

- list
- create
- delete
## list
```shell
$ bin/tubectl cgroup list 
```
选项：

| 参数 | 描述 | 默认值 | 必需 |
| --- | --- | --- | --- |
| -n, --topicName | String. topic名称 |  | 
 |
| -g, --groupName | String. 消费者组 |  | 
 |
| -c, --createUser | String. 创建人 |  |  |

## create
```shell
$ bin/tubectl cgroup create
```
选项：

| 参数 | 描述 | 默认值 | 必需 |
| --- | --- | --- | --- |
| -n, --topicName | String. topic名称 |  | 是 |
| -g, --groupName | String. 消费者组 |  | 是 |
| -at, --confModAuthToken | String. 配置修改授权key |  | 是 |
| -c, --createUser | String. 创建人 |  | 是 |
| -cd, --createDate | String. 创建时间 |  | 
 |

## delete
```shell
$ bin/tubectl cgroup delete
```
选项：

| 参数 | 描述 | 默认值 | 必需 |
| --- | --- | --- | --- |
| -n, --topicName | String. topic名称 |  | 是 |
| -at, --confModAuthToken | String. 配置修改授权key |  | 是 |
| -g, --groupName | String. 消费者组 |  | 
 |

