/*
 * @Author: fuwei 2567873016@qq.com
 * @Date: 2025-05-27 23:05:14
 * @LastEditors: fuwei 2567873016@qq.com
 * @LastEditTime: 2025-05-28 23:50:08
 * @FilePath: \ourhome\src\mock\user.ts
 * @Description:
 *
 * Copyright (c) 2025 by VGE, All Rights Reserved.
 */
/*
 * @Author: fuwei 2567873016@qq.com
 * @Date: 2025-05-27 23:05:14
 * @LastEditors: fuwei 2567873016@qq.com
 * @LastEditTime: 2025-05-27 23:05:38
 * @FilePath: \ourhome\src\mock\user.ts
 * @Description:
 *
 * Copyright (c) 2025 by VGE, All Rights Reserved.
 */
import Mock from "mockjs"

// 拦截 GET /api/user/list
Mock.mock("/user/userInfo", "get", {
  code: 200,
  data: {
    list: Mock.mock({
      "list|5-10": [
        {
          "id|+1": 1000,
          name: "@cname",
          avatar: '@image("100x100")',
          "status|1": ["active", "inactive", "banned"],
        },
      ],
    }),
  },
})
