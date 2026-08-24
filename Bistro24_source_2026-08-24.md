# Bistro24 — Полный исходный код

> Репозиторий: https://github.com/pacman1988ninja-lgtm/Bistro24
> Ветка: `main`
> Дата выгрузки: 2026-08-24
> Всего файлов: 39

---

### package.json

```json
{
  "name": "bistro24-mobile",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^1.31.0",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "react-router-dom": "^7.18.2",
    "xlsx": "^0.18.5"
  },
  "devDependencies": {
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.4",
    "oxlint": "^1.75.0",
    "vite": "^8.2.0"
  }
}
```

---

### package-lock.json

```json
{
  "name": "bistro24-mobile",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "bistro24-mobile",
      "version": "0.0.0",
      "dependencies": {
        "lucide-react": "^1.31.0",
        "react": "^19.2.8",
        "react-dom": "^19.2.8",
        "react-router-dom": "^7.18.2",
        "xlsx": "^0.18.5"
      },
      "devDependencies": {
        "@types/react": "^19.2.17",
        "@types/react-dom": "^19.2.3",
        "@vitejs/plugin-react": "^6.0.4",
        "oxlint": "^1.75.0",
        "vite": "^8.2.0"
      }
    },
    "node_modules/@oxc-project/types": {
      "version": "0.146.0",
      "resolved": "https://registry.npmjs.org/@oxc-project/types/-/types-0.146.0.tgz",
      "integrity": "sha512-XC0QsnnhVe7sLIWmYmdPw7x5P0h4W8vUU3Nv1ySgWXtvCz8NizoAEpGXA0sOYoJQV2Rl13LgURAHQ5cI5ILCSA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/Boshen"
      }
    },
    "node_modules/@oxlint/binding-android-arm-eabi": {
      "version": "1.79.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-android-arm-eabi/-/binding-android-arm-eabi-1.79.0.tgz",
      "integrity": "sha512-TebFaaMklO/RXzTv7PucaCq9l3X6D1gA+C8H6K4njtjFOV+zWE9MKLpulcJZN9bzytbUbQIY0mZuz12nQ5Kv4Q==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-android-arm64": {
      "version": "1.79.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-android-arm64/-/binding-android-arm64-1.79.0.tgz",
      "integrity": "sha512-KqqnOtAVgNsPPF0YSodkFZA1O80jcKoCZCTu3bgsszxA+MrMP9TLzfXitKjEj1FmrPprKDMdRDMmY3weESO9sg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-darwin-arm64": {
      "version": "1.79.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-darwin-arm64/-/binding-darwin-arm64-1.79.0.tgz",
      "integrity": "sha512-BVC2nsMzqQzRDPc5RhixkZ+m1p7iH4bxRRvqkbwDXX0PlQKm1BPy8J8cRjnAFafOq2QzI+BfO3vE8w2GZ3CBag==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-darwin-x64": {
      "version": "1.79.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-darwin-x64/-/binding-darwin-x64-1.79.0.tgz",
      "integrity": "sha512-p6Lm+snmhGuLKL1+CpCV8L6ijkE/qJzK2H2jG9+eKJT0n31RbY4FLsdhexekgP3bLpw4Kgde+9DZuDZQ4yIInA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-freebsd-x64": {
      "version": "1.79.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-freebsd-x64/-/binding-freebsd-x64-1.79.0.tgz",
      "integrity": "sha512-qDMm0dXZnoHyRqSL4N4xUq82T4sqK5cbKSjvd/dF/YbMUXc2R1wEPf+vmA5S0qUmi0nwXfNbjXBtZaIqzQLIMg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm-gnueabihf": {
      "version": "1.79.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.79.0.tgz",
      "integrity": "sha512-2od7s0nuKPzqyUZAWk9KkCyGg7eI9dwFPZg+20lB15fKFkVZ0c9ZFxqPfiBAyDTlTkh9stPI0t+JlPCqMbItVA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm-musleabihf": {
      "version": "1.79.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm-musleabihf/-/binding-linux-arm-musleabihf-1.79.0.tgz",
      "integrity": "sha512-ZOQUjkzDnvlhSE3+tWC3YXx94MMl+sYMlwH+u1+YGApGHOJP/YAc8ZBRFOXZ6eOBmxtXAWuS/fBcdZr8qqNO1A==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm64-gnu": {
      "version": "1.79.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.79.0.tgz",
      "integrity": "sha512-lu158FR4nGqGeRS3BQvtG85wRgU/Fy4MD5Cxp1hzJXizGiLo6u2742wJSCDKh8cFcZntvX7fcxlq4mMmfryH1g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm64-musl": {
      "version": "1.79.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.79.0.tgz",
      "integrity": "sha512-mbpKQeE2aflTjddaHK7MP8KP/OFbUM++lt5M635ENM8IyIdK0jm2t9pb+2v9mVVIvhF6TqA4l7F79Pll1mi+uw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-ppc64-gnu": {
      "version": "1.79.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.79.0.tgz",
      "integrity": "sha512-WpGNua7gaxaHnpSDeog2ji8IDHn/QLPl9LPzwkR/FvVv58vT5BcXjRXnU+wbu3N75cpeha8CdC7ho/U2OIsB4g==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-riscv64-gnu": {
      "version": "1.79.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-riscv64-gnu/-/binding-linux-riscv64-gnu-1.79.0.tgz",
      "integrity": "sha512-tK1E93A5LVzISg4ngpKJnfTs7EqtIUceGI7MQ4GyDjJiLi8wPCkEyKlj2xkyKWZ1yzkDJyLHTBJ5/iFWRdnJvg==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-riscv64-musl": {
      "version": "1.79.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-riscv64-musl/-/binding-linux-riscv64-musl-1.79.0.tgz",
      "integrity": "sha512-qhQvUIrngXivA2A9pQ+xPCychztn/5qUv7yS3gDwXv3w7Rag+eTeeXWmRyx+t7XsW5x6LuY/8AsTq36UgFIblg==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-s390x-gnu": {
      "version": "1.79.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.79.0.tgz",
      "integrity": "sha512-sv6AaVgU/eE6u+6WFiQVDcPPwTxP6IJMSB9k701W2r/r6Tx465e8vPvVyRxquNH4Vy6KwRNu90mVbxXJN8+5gg==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-x64-gnu": {
      "version": "1.79.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.79.0.tgz",
      "integrity": "sha512-iFZL02deziHslb3jEX9KdqlAkYoo4fGyotchKDzdfK1f5mxlIBeiQeHhvK3iFpuEJSB4ma/qeFn9oxPiwnhUPQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-x64-musl": {
      "version": "1.79.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-x64-musl/-/binding-linux-x64-musl-1.79.0.tgz",
      "integrity": "sha512-3DtZR2raqObnh7wXZoFYFd0Fw7skBvcb3f7A+/lkEiDuh8hrE6vv9b/62Qxao1a9/OeHLw/FcXlXzgsW9wTRFg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-openharmony-arm64": {
      "version": "1.79.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-openharmony-arm64/-/binding-openharmony-arm64-1.79.0.tgz",
      "integrity": "sha512-Oatt4GuA1WJkqzk2ozx4HrWROOi7opV3AKDw/U8qDIqeTqzsjn5K2x3REJMNjU3/KU/Bkq96Zi3CknaiDTaC/Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-win32-arm64-msvc": {
      "version": "1.79.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.79.0.tgz",
      "integrity": "sha512-NAgZr9Qp8nIA9rpo0JEvwiabTF/2UVqBNnupBG9X4kxXcQoScJUTi+qHhvabb9s/thgj5wQ4XcIaJvb+ZMgoKw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-win32-ia32-msvc": {
      "version": "1.79.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-win32-ia32-msvc/-/binding-win32-ia32-msvc-1.79.0.tgz",
      "integrity": "sha512-+KyXjIvcpaXmWW/j9NNY5yWjrIVxaX18VyIheQy3jwc2GSYgpCr7MGI/HxIGQ/shAL5IWEKbhsqoMpAO5Stiog==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-win32-x64-msvc": {
      "version": "1.79.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.79.0.tgz",
      "integrity": "sha512-mEelcCMMBS57sIXh2veGMNy+pQwuGtcMxHxGIZWQ5Ba9pJ5jCCUFOZB9E2JhBaxGsURe+WGe0zJp4RVre52gpQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-android-arm-eabi": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm-eabi/-/binding-android-arm-eabi-1.2.5.tgz",
      "integrity": "sha512-DLe/i+l8ynIBY7XEQ191TeZvCoowIGa18R+dIV30GW7DiOtp74i/xX8hs8GUjW5ARV7VZuie3d6AumSmCwbeRA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-android-arm64": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm64/-/binding-android-arm64-1.2.5.tgz",
      "integrity": "sha512-zXcwKlQApYAOELHd8PwKDFkagYF9Wy4e0RJ+0qnzl9Pjnpj75TEG8ufv40p2J7kCEfwZAsNiuzRIyNNMWT38ig==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-arm64": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-arm64/-/binding-darwin-arm64-1.2.5.tgz",
      "integrity": "sha512-dK4QakI42nzWgJT5sm4y4y/O//D4OxM75/cH28RLV+nzIN9AY+YsbuUVrUTjlLjXR6vpyxFbSsbmNuJ6BP9sww==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-x64": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-x64/-/binding-darwin-x64-1.2.5.tgz",
      "integrity": "sha512-fqSALaUu1Wjd1nK2uW2kJDWdLCc8lx1IcY+MTY26Aurfdx19anlzhqXOgCFbBFQnlFDTn4TC1/7Nz4Bl2mLP3A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-freebsd-x64": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-freebsd-x64/-/binding-freebsd-x64-1.2.5.tgz",
      "integrity": "sha512-/vCnNxlkxs9tKxNDcyWUePpJ/PgTzxIaVhoM5SmG8UV+GR/IcPam4VYxi7GIMo7PSDuNqlJqvprqii9NqqVCMw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm-gnueabihf": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.2.5.tgz",
      "integrity": "sha512-abk0NLA519LxRCszmbE0jYKuQ9YPocOXTiOXOo6Yr+YAT95VH+PtqYAjOJvGKt3viEd/x4qzabAlwd5bHOOARg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-gnu": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.2.5.tgz",
      "integrity": "sha512-Y7eALiJ8lr0M2HH103Js+g7V34wf6snlpZLAsHI90uLhr3PVlNsbFVAXJC9d/V6BnPyKtpSwI+NcB/RLxsQxuA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-musl": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.2.5.tgz",
      "integrity": "sha512-xMvZgnbZg4YVnR/AX2b3oOPDTFYJvUVaJg5FedA/LuvexAtXibZQej4cnTkw3rjsJ/ggUROB64TdtETiim+FYA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-ppc64-gnu": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.2.5.tgz",
      "integrity": "sha512-GRjeqTUDHTo5GwntsLaAMcBahG3nlpjftXWZLN73HiYQlhwEowvarFgQnRnQZtIp4keXX7quXFbG38uPZBa2EA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-s390x-gnu": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.2.5.tgz",
      "integrity": "sha512-vLNTR45F2Uwc8AufkNXPmB4VliaXs+FvcheEogIzOXzO4l+LzieXF5A/TWxLy5HtqpsRCHUfd0lPVrrdgXdLHQ==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-gnu": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.2.5.tgz",
      "integrity": "sha512-Mgj59/HTuYeK9Gz2MA+mBWKnHsAgkBSec15ZMb1st3oIfFbX7gCjOae7GydHhzcyQi9Z/7M1QuN9bR3oFqF0jQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-musl": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-musl/-/binding-linux-x64-musl-1.2.5.tgz",
      "integrity": "sha512-mY8AP0/ichsbhAxGnLa3d3+MwV0EfgrPND2bplI3Ym8T6R2pJ0N87bvrKVwNXmdy3jnr6eQBecdqx/HMknBmpA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-openharmony-arm64": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-openharmony-arm64/-/binding-openharmony-arm64-1.2.5.tgz",
      "integrity": "sha512-8SLssA2oweAxyRgDp789ACfRb/3P+zNRJpzZxSizxF9m8NUDQ4+3xjo8ttjhVGGw6Qxb70oZiEtIjaKikCO7Yw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-arm64-msvc": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.2.5.tgz",
      "integrity": "sha512-vGbruD5zquhoc8D9SViXgN2FBJtNdTyQ4DtG+SWiEGlJiAzoKcZ2xp+xuXCffhubVdt0NJlTZqkeRuERy7g8Cw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-x64-msvc": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.2.5.tgz",
      "integrity": "sha512-e/SXpgISz+IoqVcSSI0rx/d/he8zqLex+/rCWpnHpmVfmPIUjag9H6P7zotf0gJHwPUhQxZ/mF8tr6acebT9yw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.1.tgz",
      "integrity": "sha512-2j9bGt5Jh8hj+vPtgzPtl72j0yRxHAyumoo6TNfAjsLB04UtpSvPbPcDcBMxz7n+9CYB0c1GxQFxYRg2jimqGw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/react": {
      "version": "19.2.18",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.18.tgz",
      "integrity": "sha512-AnzbBERsrLKtk2XSfTbYRLjQPdy116Sty4q+T+Bp3IC4l6jNBvreVPAHmpq9qhXQM7CXZPjLVmGMw9sy+hxQ3w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.4",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.4.tgz",
      "integrity": "sha512-Bsc+QHgp+P/F02XDzNCY9jnZNCUuLki36KT7VKrTXXLdHf+vHMNZnW1rVu5DNW/rCK+fya3DATySbLM4yhtKUw==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "6.0.5",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-6.0.5.tgz",
      "integrity": "sha512-BOVzne/NL162sMdResB25mUv+vWMF5NoAjNf09TeGlE7ZpszZWSD3winycicLJw72yeVsoCn/2kOhEuCvEShMA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rolldown/pluginutils": "^1.0.1"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "@rolldown/plugin-babel": "^0.1.7 || ^0.2.0",
        "babel-plugin-react-compiler": "^1.0.0",
        "vite": "^8.0.0"
      },
      "peerDependenciesMeta": {
        "@rolldown/plugin-babel": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        }
      }
    },
    "node_modules/adler-32": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/adler-32/-/adler-32-1.3.1.tgz",
      "integrity": "sha512-ynZ4w/nUUv5rrsR8UUGoe1VC9hZj6V5hU9Qw1HlMDJGEJw5S7TfTErWTjMys6M7vr0YWcPqs3qAr4ss0nDfP+A==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/cfb": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/cfb/-/cfb-1.2.2.tgz",
      "integrity": "sha512-KfdUZsSOw19/ObEWasvBP/Ac4reZvAGauZhs6S/gqNhXhI7cKwvlH7ulj+dOEYnca4bm4SGo8C1bTAQvnTjgQA==",
      "license": "Apache-2.0",
      "dependencies": {
        "adler-32": "~1.3.0",
        "crc-32": "~1.2.0"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/codepage": {
      "version": "1.15.0",
      "resolved": "https://registry.npmjs.org/codepage/-/codepage-1.15.0.tgz",
      "integrity": "sha512-3g6NUTPd/YtuuGrhMnOMRjFc+LJw/bnMp3+0r/Wcz3IXUuCosKRJvMphm5+Q+bvTVGcJJuRvVLuYba+WojaFaA==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/cookie": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-1.1.1.tgz",
      "integrity": "sha512-ei8Aos7ja0weRpFzJnEA9UHJ/7XQmqglbRwnf2ATjcB9Wq874VKH9kfjjirM6UhU2/E5fFYadylyhFldcqSidQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/crc-32": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/crc-32/-/crc-32-1.2.2.tgz",
      "integrity": "sha512-ROmzCKrTnOwybPcJApAA6WBWij23HVfGVNKqqrZpuyZOHqK2CwHSvpGuyt/UNNvaIjEd8X5IFGp4Mh+Ie1IHJQ==",
      "license": "Apache-2.0",
      "bin": {
        "crc32": "bin/crc32.njs"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/frac": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/frac/-/frac-1.1.2.tgz",
      "integrity": "sha512-w/XBfkibaTl3YDqASwfDUqkna4Z2p9cFSr1aHDt0WoMTECnRfBOv2WArlZILlqgWlmdIlALXGpM2AOhEk5W3IA==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.33.0.tgz",
      "integrity": "sha512-WkUDrojuJs0xkgGf2udWxa3yGBRxPtxUkB79i6aCZLRgc7PM8fZe9TosfPDcvEpQZbuFASnHYmRLBLUbmLOIIA==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.33.0",
        "lightningcss-darwin-arm64": "1.33.0",
        "lightningcss-darwin-x64": "1.33.0",
        "lightningcss-freebsd-x64": "1.33.0",
        "lightningcss-linux-arm-gnueabihf": "1.33.0",
        "lightningcss-linux-arm64-gnu": "1.33.0",
        "lightningcss-linux-arm64-musl": "1.33.0",
        "lightningcss-linux-x64-gnu": "1.33.0",
        "lightningcss-linux-x64-musl": "1.33.0",
        "lightningcss-win32-arm64-msvc": "1.33.0",
        "lightningcss-win32-x64-msvc": "1.33.0"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.33.0.tgz",
      "integrity": "sha512-gEpRTalKdosp4Bb8qWtc2iOgE5SeIHlpS1up9bFq2wAyYhl1UdTObYiHe98zEM9SQvSoqQZ1IQD0JNpg3Ml5pg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.33.0.tgz",
      "integrity": "sha512-Sciaz8eenNTKn9b3t7+xr0ipTp9YxKQY4npwQ3mrRuL0BAVHBLyZxofhaKBAVtzmtRZ/zTyo0/to4B1uWG/Djg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.33.0.tgz",
      "integrity": "sha512-Z5UPAxzrjlWNNyGy6i65cJzzvgJ5D3T6wMvs+gWpY9d7qRhANrxqAp6LhxIgZhWEw18RfJTGcRxjuLIBr+m8XQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.33.0.tgz",
      "integrity": "sha512-QQM/Ti/hQajJwCY+RiWuCZ9sdtI/XQk7nDK5vC8kkdwixezOlDgvDx7+RT+QjK6FcFT4MpsuoBnHIo/O3StRRg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.33.0.tgz",
      "integrity": "sha512-N7FVBe6iS24MlM6R/4RBTxGhQheZGs7tiQ9U32UtF75NzP5Q7xWPRqLBCKxlRQRk3rY1jCIPLzx7WzOhuUIRLQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.33.0.tgz",
      "integrity": "sha512-j2v/itmy4HlNxlc6voKXYgBqNi0Ng2LShg4z7GufpEgs05P+2suBVyi9I6YHq5uoVFx9ETin3eCEhLVyXGQnKg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.33.0.tgz",
      "integrity": "sha512-yiO5ROMuYQgXbC60yjZU5CYSFZGKXL0HFATXt9mHJn1+zW55oCtMI9NfcVhYLMFDL7gV7oBPon/EmMMGg2OvtQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.33.0.tgz",
      "integrity": "sha512-ar+Ju7LmcN0Jo4FpL4hpFybwNG9/3A/Br5KW2n2jyODg3MEZXaDYADdemoNS+BDNfMgKvylJLj4S5tyRActuAg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.33.0.tgz",
      "integrity": "sha512-RYiYbkokw0trfKqqzfF55lginwEPrD3OJDfTuJzFs1MK6iFnDenaz1fqLLtX4ITG3OktJQXOeTaw1awrBAlZPw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.33.0.tgz",
      "integrity": "sha512-1K+MPfLSFVpphzpdbfkhlWk6wBrTObBzS2T6db10PNOZgR9GoVsAWzwNyuhUYYbTp23j+4RrncfujZ4uAzXvwA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.33.0.tgz",
      "integrity": "sha512-OlEICDx/Xl0FqSp4bry8zFnCvGpig3Gl4gCquvYwHuqJKEC1+n9NgDniFvqHGmMv1ZkqDJrDqKKSykTDX+ehuA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lucide-react": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-1.33.0.tgz",
      "integrity": "sha512-MTRwMy0ZlL8Ur/vOAiJ9XGHE+kFPC7brq6MxAm0GiGXEBj0qy0jA/pG4N675oSzciO/UCdX8T+5yUQdmDeTLxg==",
      "license": "ISC",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.18",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.18.tgz",
      "integrity": "sha512-DTg4MJbGMWkfi6VZFdNt2/caMbQy4Ou+Op/hJQvGEWcnVfoA1QA+xzRKAzw9jD6+GVOOeYr/mIcuDSdug6F6+w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/oxlint": {
      "version": "1.79.0",
      "resolved": "https://registry.npmjs.org/oxlint/-/oxlint-1.79.0.tgz",
      "integrity": "sha512-hVJ9hq9m2unPS+Of4eJJgCPdIeCC+3DHEUX3tkmrPJr3OK2hz7PhXwgC+ZP71ZcYu8cCDEtQrqLxWNvxBppBVg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "oxlint": "bin/oxlint"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/Boshen"
      },
      "optionalDependencies": {
        "@oxlint/binding-android-arm-eabi": "1.79.0",
        "@oxlint/binding-android-arm64": "1.79.0",
        "@oxlint/binding-darwin-arm64": "1.79.0",
        "@oxlint/binding-darwin-x64": "1.79.0",
        "@oxlint/binding-freebsd-x64": "1.79.0",
        "@oxlint/binding-linux-arm-gnueabihf": "1.79.0",
        "@oxlint/binding-linux-arm-musleabihf": "1.79.0",
        "@oxlint/binding-linux-arm64-gnu": "1.79.0",
        "@oxlint/binding-linux-arm64-musl": "1.79.0",
        "@oxlint/binding-linux-ppc64-gnu": "1.79.0",
        "@oxlint/binding-linux-riscv64-gnu": "1.79.0",
        "@oxlint/binding-linux-riscv64-musl": "1.79.0",
        "@oxlint/binding-linux-s390x-gnu": "1.79.0",
        "@oxlint/binding-linux-x64-gnu": "1.79.0",
        "@oxlint/binding-linux-x64-musl": "1.79.0",
        "@oxlint/binding-openharmony-arm64": "1.79.0",
        "@oxlint/binding-win32-arm64-msvc": "1.79.0",
        "@oxlint/binding-win32-ia32-msvc": "1.79.0",
        "@oxlint/binding-win32-x64-msvc": "1.79.0"
      },
      "peerDependencies": {
        "oxlint-tsgolint": ">=7.0.2001",
        "vite-plus": "*"
      },
      "peerDependenciesMeta": {
        "oxlint-tsgolint": {
          "optional": true
        },
        "vite-plus": {
          "optional": true
        }
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.5.tgz",
      "integrity": "sha512-RvwwcruNjI1ncT5xRakeyS9Lf8lcItv34KD+aif+VH9kduAyfYBipGh12274xtenIPZ119/R9BdTBa8gAwSh0A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.26",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.26.tgz",
      "integrity": "sha512-u82N74LFzG8ca+dD8puPnplTXoGH4fTPpVGuIbt36G3qvNlkvfD0lEAZSxaly3KX8TS/L1A1gsCEmvKmBcVbkQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.17",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/react": {
      "version": "19.2.8",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.8.tgz",
      "integrity": "sha512-PWaYA1L/q9u2u7xYQi+Y3L3Yfnie7XyLeaJICV1MGD6LprsBxcAqGjYyr0eY3p+QdsA+x/Irkt4Qif8D63+Sbw==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.8",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.8.tgz",
      "integrity": "sha512-rVprimfGBG3DR+Tq0IQG2DT5PxKth1WIGDmj5yPmlzr4YBe7uyE+Du4oVqTDXZSHGGGXRtTJEGSSePyQCMBglQ==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.8"
      }
    },
    "node_modules/react-router": {
      "version": "7.18.2",
      "resolved": "https://registry.npmjs.org/react-router/-/react-router-7.18.2.tgz",
      "integrity": "sha512-aUVMjFm3GAPTTZL7oYr5E7ETiqfQCHRLH+B+5afnICvf0r7kkK4eR6SMuwbSTJw/7t+12khT/Kahij49fqOCIg==",
      "license": "MIT",
      "dependencies": {
        "cookie": "^1.0.1",
        "set-cookie-parser": "^2.6.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      },
      "peerDependenciesMeta": {
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/react-router-dom": {
      "version": "7.18.2",
      "resolved": "https://registry.npmjs.org/react-router-dom/-/react-router-dom-7.18.2.tgz",
      "integrity": "sha512-AIKJ/jgGlFb3EbfCXk5Gzshiwt+l3mqbCrNjmEWMMjqQxNJ3svBa6bgzFyCC2Sw3RA0VWF1kg3uQf2OFhxb8hw==",
      "license": "MIT",
      "dependencies": {
        "react-router": "7.18.2"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      }
    },
    "node_modules/rolldown": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/rolldown/-/rolldown-1.2.5.tgz",
      "integrity": "sha512-VD2IE5PUG4Oj8zz2VGykiYd5wbnjdIiSsNQb8Qu5B+noEp+A78mu2iVvpp27g8es14Tk9rofNs5Tku9iQCS4fA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@oxc-project/types": "=0.146.0",
        "@rolldown/pluginutils": "^1.0.0"
      },
      "bin": {
        "rolldown": "bin/cli.mjs"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "optionalDependencies": {
        "@rolldown/binding-android-arm-eabi": "1.2.5",
        "@rolldown/binding-android-arm64": "1.2.5",
        "@rolldown/binding-darwin-arm64": "1.2.5",
        "@rolldown/binding-darwin-x64": "1.2.5",
        "@rolldown/binding-freebsd-x64": "1.2.5",
        "@rolldown/binding-linux-arm-gnueabihf": "1.2.5",
        "@rolldown/binding-linux-arm64-gnu": "1.2.5",
        "@rolldown/binding-linux-arm64-musl": "1.2.5",
        "@rolldown/binding-linux-ppc64-gnu": "1.2.5",
        "@rolldown/binding-linux-s390x-gnu": "1.2.5",
        "@rolldown/binding-linux-x64-gnu": "1.2.5",
        "@rolldown/binding-linux-x64-musl": "1.2.5",
        "@rolldown/binding-openharmony-arm64": "1.2.5",
        "@rolldown/binding-win32-arm64-msvc": "1.2.5",
        "@rolldown/binding-win32-x64-msvc": "1.2.5"
      }
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "license": "MIT"
    },
    "node_modules/set-cookie-parser": {
      "version": "2.7.2",
      "resolved": "https://registry.npmjs.org/set-cookie-parser/-/set-cookie-parser-2.7.2.tgz",
      "integrity": "sha512-oeM1lpU/UvhTxw+g3cIfxXHyJRc/uidd3yK1P242gzHds0udQBYzs3y8j4gCCW+ZJ7ad0yctld8RYO+bdurlvw==",
      "license": "MIT"
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ssf": {
      "version": "0.11.2",
      "resolved": "https://registry.npmjs.org/ssf/-/ssf-0.11.2.tgz",
      "integrity": "sha512-+idbmIXoYET47hH+d7dfm2epdOMUDjqcB4648sTZ+t2JwoyBFL/insLfB/racrDmsKB3diwsDA696pZMieAC5g==",
      "license": "Apache-2.0",
      "dependencies": {
        "frac": "~1.1.2"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.17",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz",
      "integrity": "sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/vite": {
      "version": "8.2.1",
      "resolved": "https://registry.npmjs.org/vite/-/vite-8.2.1.tgz",
      "integrity": "sha512-EU/eS7BH3XROHh2YnBefjM6DBKA6ZeMZEYQbj7NLWg5wHYlhB8B/Mayd5XsgWq+NFYccDOTemRpdETWR6Ka/lw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "lightningcss": "^1.33.0",
        "picomatch": "^4.0.5",
        "postcss": "^8.5.25",
        "rolldown": "~1.2.1",
        "tinyglobby": "^0.2.17"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "@vitejs/devtools": "^0.4.0",
        "esbuild": "^0.27.0 || ^0.28.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "@vitejs/devtools": {
          "optional": true
        },
        "esbuild": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/wmf": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wmf/-/wmf-1.0.2.tgz",
      "integrity": "sha512-/p9K7bEh0Dj6WbXg4JG0xvLQmIadrner1bi45VMJTfnbVHsc7yIajZyoSoK60/dtVBs12Fm6WkUI5/3WAVsNMw==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/word": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/word/-/word-0.3.0.tgz",
      "integrity": "sha512-OELeY0Q61OXpdUfTp+oweA/vtLVg5VDOXh+3he3PNzLGG/y0oylSOC1xRVj0+l4vQ3tj/bB1HVHv1ocXkQceFA==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/xlsx": {
      "version": "0.18.5",
      "resolved": "https://registry.npmjs.org/xlsx/-/xlsx-0.18.5.tgz",
      "integrity": "sha512-dmg3LCjBPHZnQp5/F/+nnTa+miPJxUXB6vtk42YjBBKayDNagxGEeIdWApkYPOf3Z3pm3k62Knjzp7lMeTEtFQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "adler-32": "~1.3.0",
        "cfb": "~1.2.1",
        "codepage": "~1.15.0",
        "crc-32": "~1.2.1",
        "ssf": "~0.11.2",
        "wmf": "~1.0.1",
        "word": "~0.3.0"
      },
      "bin": {
        "xlsx": "bin/xlsx.njs"
      },
      "engines": {
        "node": ">=0.8"
      }
    }
  }
}
```

---

### vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Bistro24/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
```

---

### index.html

```html
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
    <meta name="theme-color" content="#1a1a2e" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="Бистро24" />
    <link rel="manifest" href="%BASE_URL%manifest.json" />
    <title>Бистро24 — Кассовый учет</title>
    <style>
      * { -webkit-tap-highlight-color: transparent; }
      body { overscroll-behavior-y: none; }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          const swPath = '%BASE_URL%sw.js';
          if (!swPath.includes('%')) {
            navigator.serviceWorker.register(swPath);
          }
        });
      }
    </script>
  </body>
</html>
```

---

### public/manifest.json

```json
{
  "name": "Бистро24",
  "short_name": "Бистро24",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#1a1a1a",
  "theme_color": "#ff6b35",
  "icons": [
    {
      "src": "favicon.svg",
      "sizes": "any",
      "type": "image/svg+xml"
    }
  ]
}
```

---

### public/sw.js

```javascript
const CACHE_NAME = 'bistro24-v47';
const BASE = '/Bistro24/';
const STATIC_ASSETS = [
  BASE,
  BASE + 'index.html',
  BASE + 'manifest.json',
  BASE + 'favicon.svg',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(
        STATIC_ASSETS.map((url) =>
          cache.add(url).catch((err) => console.warn('SW skip:', url, err))
        )
      )
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then((res) => {
      if (res.ok) {
        const clone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
      }
      return res;
    }).catch(() => caches.match(e.request))
  );
});
```

---

### src/main.jsx

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

### src/App.jsx

```jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { store } from './store';
import { initSync } from './githubSync';
import Login from './pages/Login';
import Home from './pages/Home';
import ShiftDetail from './pages/ShiftDetail';
import EditShift from './pages/EditShift';
import Operations from './pages/Operations';
import NewOperation from './pages/NewOperation';
import NewGoodsOperation from './pages/NewGoodsOperation';
import EditOperation from './pages/EditOperation';
import AllOperations from './pages/AllOperations';
import CloseShift from './pages/CloseShift';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Departments from './pages/Departments';
import Payroll from './pages/Payroll';
import Settlements from './pages/Settlements';
import BottomNav from './components/BottomNav';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    store.init().then(() => {
      initSync(); // GitHub-синхронизация (если настроена), не блокирует запуск
      store.getCurrentUser().then((u) => {
        if (u) setUser(u);
        setLoading(false);
      });
    });
  }, []);

  if (loading) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f0f1a', color: '#fff' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Бистро24</div>
          <div style={{ color: '#a0a0b8' }}>Загрузка...</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Bistro24/'}>
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/shift/:id" element={<ShiftDetail user={user} />} />
            <Route path="/shift/:id/edit" element={<EditShift user={user} />} />
            <Route path="/shift/:id/operations" element={<Operations user={user} />} />
            <Route path="/shift/:id/operations/new" element={<NewOperation user={user} />} />
            <Route path="/shift/:id/goods/new" element={<NewGoodsOperation user={user} />} />
            <Route path="/shift/:id/operations/:opId/edit" element={<EditOperation user={user} />} />
            <Route path="/operation/:opId/edit" element={<EditOperation user={user} />} />
            <Route path="/shift/:id/close" element={<CloseShift user={user} />} />
            <Route path="/operations" element={<AllOperations user={user} />} />
            <Route path="/goods-operation/new" element={<NewGoodsOperation user={user} />} />
            <Route path="/cash-operation/new" element={<NewOperation user={user} />} />
            <Route path="/reports" element={<Reports user={user} />} />
            <Route path="/payroll" element={<Payroll user={user} />} />
            <Route path="/settlements" element={<Settlements user={user} />} />
            <Route path="/settings" element={<Settings user={user} />} />
            <Route path="/departments" element={<Departments user={user} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <BottomNav user={user} />
      </div>
    </BrowserRouter>
  );
}

export default App;
```

---

### src/store.js

```javascript
const DB_NAME = 'Bistro24DB';
const DB_VERSION = 8;

const SYNCED_STORES = ['shifts', 'operations', 'users', 'references', 'payrollPayments'];

let cachedDB = null;

function openDB() {
  if (cachedDB) return Promise.resolve(cachedDB);
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onerror = () => reject(req.error);
    req.onsuccess = () => {
      cachedDB = req.result;
      cachedDB.onclose = () => { cachedDB = null; };
      resolve(cachedDB);
    };
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('shifts')) db.createObjectStore('shifts', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('operations')) db.createObjectStore('operations', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('photos')) db.createObjectStore('photos', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('users')) db.createObjectStore('users', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('references')) db.createObjectStore('references', { keyPath: 'key' });
      if (!db.objectStoreNames.contains('audit')) db.createObjectStore('audit', { keyPath: 'id', autoIncrement: true });
      if (!db.objectStoreNames.contains('meta')) db.createObjectStore('meta', { keyPath: 'key' });
      if (!db.objectStoreNames.contains('conflicts')) db.createObjectStore('conflicts', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('payrollPayments')) db.createObjectStore('payrollPayments', { keyPath: 'id' });
    };
  });
}

async function dbGet(store, key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readonly');
    const req = tx.objectStore(store).get(key);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function dbGetAll(store) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readonly');
    const req = tx.objectStore(store).getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

let changeListener = null;
export function setChangeListener(fn) {
  changeListener = fn;
}
function notifyChange() {
  if (changeListener) {
    try { changeListener(); } catch { /* ignore */ }
  }
}

async function dbPut(store, data) {
  if (SYNCED_STORES.includes(store)) {
    data.__ut = Date.now();
  }
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    const req = tx.objectStore(store).put(data);
    req.onsuccess = () => {
      if (SYNCED_STORES.includes(store)) notifyChange();
      resolve(req.result);
    };
    req.onerror = () => reject(req.error);
  });
}

async function dbDelete(store, key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    const req = tx.objectStore(store).delete(key);
    req.onsuccess = async () => {
      if (SYNCED_STORES.includes(store)) {
        try {
          const meta = await dbGet('meta', 'tombstones');
          const map = meta?.map || {};
          map[`${store}:${key}`] = Date.now();
          await dbPutRaw('meta', { key: 'tombstones', map });
          notifyChange();
        } catch { /* ignore */ }
      }
      resolve();
    };
    req.onerror = () => reject(req.error);
  });
}

async function dbPutRaw(store, data) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    const req = tx.objectStore(store).put(data);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function dbDeleteRaw(store, key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    const req = tx.objectStore(store).delete(key);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

export const _raw = {
  get: dbGet,
  getAll: dbGetAll,
  putRaw: dbPutRaw,
  deleteRaw: dbDeleteRaw,
  async getTombstones() {
    const meta = await dbGet('meta', 'tombstones');
    return meta?.map || {};
  },
};

function generateId() {
  return 'id_' + Math.random().toString(36).slice(2, 9) + '_' + Date.now();
}

export function toNum(value, fallback = 0) {
  if (value === null || value === undefined) return fallback;
  const str = String(value).replace(',', '.').trim();
  if (str === '') return fallback;
  const n = Number(str);
  return Number.isFinite(n) ? n : fallback;
}

export function nowISO() {
  return new Date().toISOString();
}

/**
 * Возвращает дату в формате YYYY-MM-DD по локальному часовому поясу.
 * Используется для сравнения дат без сдвига UTC.
 */
function localDateStr(isoString) {
  if (!isoString) return '';
  const d = new Date(isoString);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function getShortWeekday(isoString) {
  if (!isoString) return '';
  const days = ['вс','пн','вт','ср','чт','пт','сб'];
  return days[new Date(isoString).getDay()];
}

const DEFAULT_USERS = [
  { id: 'u1', email: 'seller@bistro24.ru', fullName: 'Петрова М.С.', role: 'seller', pin: '1111', active: true },
  { id: 'u2', email: 'manager@bistro24.ru', fullName: 'Иванов А.П.', role: 'manager', pin: '2222', active: true },
  { id: 'u3', email: 'owner@bistro24.ru', fullName: 'Владелец', role: 'owner', pin: '3333', active: true },
];

const DEFAULT_REFS = {
  expenseTypes: [
    { id: 'et1', name: 'Контрагент', active: true, linkedRef: 'counterparties' },
    { id: 'et2', name: 'Заработная плата', active: true, linkedRef: 'employees' },
    { id: 'et3', name: 'Подрядчик', active: true, linkedRef: 'contractors' },
    { id: 'et4', name: 'Хоз. нужды', active: true },
    { id: 'et5', name: 'Прочие выплаты', active: true },
    { id: 'et6', name: 'Инкассация выручки', active: true, linkedRef: 'employees', filterRoles: ['owner', 'manager'] },
  ],
  paymentForms: [
    { id: 'pf1', name: 'Наличные', active: true },
    { id: 'pf2', name: 'Безналичные', active: true },
    { id: 'pf3', name: 'Перевод СБП', active: true },
  ],
  contractors: [
    { id: 'c1', name: 'ООО «Продукты»', active: true },
    { id: 'c2', name: 'ИП Сидоров', active: true },
  ],
  counterparties: [
    { id: 'cnt1', name: 'Поставщик №1', active: true },
    { id: 'cnt2', name: 'Арендодатель', active: true },
  ],
  incomeSources: [],
  employees: [
    { id: 'u1', name: 'Петрова М.С.', active: true, role: 'seller' },
    { id: 'u2', name: 'Иванов А.П.', active: true, role: 'manager' },
    { id: 'u3', name: 'Владелец', active: true, role: 'owner' },
  ],
  shiftTypes: [
    { id: 'st1', name: 'Сутки', active: true },
    { id: 'st2', name: 'День', active: true },
    { id: 'st3', name: 'Ночь', active: true },
    { id: 'st4', name: 'Управляющий', active: true },
  ],
};

async function initDefaults() {
  const existing = await dbGetAll('users');
  if (existing.length === 0) {
    for (const u of DEFAULT_USERS) await dbPutRaw('users', { ...u, __ut: 0 });
  }
  const refs = await dbGet('references', 'main');
  if (!refs) {
    await dbPutRaw('references', { key: 'main', data: DEFAULT_REFS, __ut: 0 });
  } else {
    const data = refs.data;
    let changed = false;
    if (!data.shiftTypes || data.shiftTypes.length === 0) {
      data.shiftTypes = DEFAULT_REFS.shiftTypes;
      changed = true;
    }
    if (!data.incomeSources) {
      data.incomeSources = [];
      changed = true;
    }
    const linkMap = {
      'Контрагент': 'counterparties',
      'Заработная плата': 'employees',
      'Подрядчик': 'contractors',
      'Инкассация выручки': 'employees',
    };
    if (data.expenseTypes) {
      data.expenseTypes = data.expenseTypes.map(et => {
        if (!et.linkedRef && linkMap[et.name]) {
          changed = true;
          const upd = { ...et, linkedRef: linkMap[et.name] };
          if (et.name === 'Инкассация выручки') upd.filterRoles = ['owner', 'manager'];
          return upd;
        }
        return et;
      });
    }
    let empChanged = false;
    if (data.employees) {
      const stAll = (data.shiftTypes || []).filter(t => t.active).map(t => t.id);
      const stSeller = (data.shiftTypes || []).filter(t => t.name !== 'Управляющий' && t.active).map(t => t.id);
      const stManager = (data.shiftTypes || []).filter(t => t.name === 'Управляющий' && t.active).map(t => t.id);
      data.employees = data.employees.map(emp => {
        if (!emp.shiftTypes || emp.shiftTypes.length === 0) {
          empChanged = true;
          if (emp.role === 'seller') return { ...emp, shiftTypes: stSeller };
          if (emp.role === 'manager') return { ...emp, shiftTypes: stManager };
          if (emp.role === 'owner') return { ...emp, shiftTypes: stAll };
        }
        return emp;
      });
    }
    if (changed || empChanged) {
      refs.data = data;
      await dbPut('references', refs);
    }
  }
}

async function logAudit(userId, action, entityType, entityId, details = {}) {
  const entry = {
    id: generateId(),
    timestamp: nowISO(),
    userId,
    action,
    entityType,
    entityId,
    details,
  };
  await dbPutRaw('audit', entry);
}

async function getAudit(entityType, entityId) {
  const all = await dbGetAll('audit');
  return all
    .filter(a => (!entityType || a.entityType === entityType) && (!entityId || a.entityId === entityId))
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
}

export const store = {
  async init() {
    await initDefaults();
  },

  async loginByPin(pin) {
    const users = await dbGetAll('users');
    const user = users.find((u) => u.pin === pin && u.active);
    if (user) {
      localStorage.setItem('bistro24_session', JSON.stringify({ userId: user.id, ts: Date.now() }));
      return user;
    }
    return null;
  },

  async loginByEmail(email) {
    const users = await dbGetAll('users');
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.active);
    if (user) {
      localStorage.setItem('bistro24_session', JSON.stringify({ userId: user.id, ts: Date.now() }));
      return user;
    }
    return null;
  },

  getSession() {
    const raw = localStorage.getItem('bistro24_session');
    if (!raw) return null;
    try {
      const s = JSON.parse(raw);
      if (Date.now() - s.ts > 86400000 * 7) {
        localStorage.removeItem('bistro24_session');
        return null;
      }
      return s;
    } catch {
      return null;
    }
  },

  async getCurrentUser() {
    const s = this.getSession();
    if (!s) return null;
    const user = await dbGet('users', s.userId);
    if (!user || !user.active) {
      localStorage.removeItem('bistro24_session');
      return null;
    }
    return user;
  },

  logout() {
    localStorage.removeItem('bistro24_session');
  },

  async getUsers() {
    return dbGetAll('users');
  },

  async addUser(user) {
    user.id = generateId();
    user.active = true;
    await dbPut('users', user);
    return user;
  },

  async updateUser(user) {
    await dbPut('users', user);
    return user;
  },

  async getReferences() {
    const refs = await dbGet('references', 'main');
    return refs ? refs.data : DEFAULT_REFS;
  },

  async syncEmployees(employees) {
    const users = await dbGetAll('users');
    for (const emp of employees.filter(e => e.active)) {
      const existing = users.find(u => u.id === emp.id);
      if (existing) {
        existing.fullName = emp.name;
        existing.role = emp.role;
        if (emp.pin) existing.pin = emp.pin;
        await dbPut('users', existing);
      } else {
        await dbPut('users', {
          id: emp.id,
          email: '',
          fullName: emp.name,
          role: emp.role,
          pin: emp.pin || '0000',
          active: true,
        });
      }
    }
    for (const u of users) {
      if (u.role === 'owner') continue;
      const emp = employees.find(e => e.id === u.id);
      if (emp && emp.active === false) {
        u.active = false;
        await dbPut('users', u);
      }
    }
  },

  async saveReferences(data) {
    await dbPut('references', { key: 'main', data });
  },

  async getShifts() {
    return dbGetAll('shifts');
  },

  async recalcShift(shiftId) {
    const shift = await dbGet('shifts', shiftId);
    if (!shift) return null;
    const ops = await dbGetAll('operations');
    const shiftOps = ops.filter(o => o.shiftId === shiftId);
    const cashOps = shiftOps.filter(o => !o.category || o.category === 'cash');
    const goodsOps = shiftOps.filter(o => o.category === 'goods');
    shift.deposit = cashOps.filter(o => o.type === 'income').reduce((s, o) => s + o.amount, 0);
    shift.expense = cashOps.filter(o => o.type === 'expense').reduce((s, o) => s + o.amount, 0);
    shift.goodsIncome = goodsOps.filter(o => o.type === 'income').reduce((s, o) => s + o.amount, 0);
    shift.goodsExpense = goodsOps.filter(o => o.type === 'expense').reduce((s, o) => s + o.amount, 0);
    if (shift.status === 'Закрыта') {
      shift.endBalance = shift.startBalance + shift.cash + shift.deposit - shift.expense;
    }
    await dbPut('shifts', shift);
    return shift;
  },

  async recalcChain(fromShiftId) {
    const allShifts = await dbGetAll('shifts');
    const sorted = allShifts.sort((a, b) => new Date(a.openDate) - new Date(b.openDate));
    const fromIndex = sorted.findIndex(s => s.id === fromShiftId);
    if (fromIndex === -1) return;

    const refs = await this.getReferences();
    const cashFormId = refs.paymentForms?.find(pf => pf.name === 'Наличные')?.id;

    for (let i = fromIndex; i < sorted.length; i++) {
      const shift = sorted[i];
      if (i > 0) {
        shift.startBalance = sorted[i - 1].endBalance;
      }
      const ops = await dbGetAll('operations');
      const shiftOps = ops.filter(o => o.shiftId === shift.id);
      const cashOps = shiftOps.filter(o => !o.category || o.category === 'cash');
      const goodsOps = shiftOps.filter(o => o.category === 'goods');
      if (shift.status !== 'Закрыта') {
        shift.deposit = cashOps.filter(o => o.type === 'income' && o.paymentFormId === cashFormId).reduce((s, o) => s + o.amount, 0);
        shift.expense = cashOps.filter(o => o.type === 'expense' && o.paymentFormId === cashFormId).reduce((s, o) => s + o.amount, 0);
      }
      shift.goodsIncome = goodsOps.filter(o => o.type === 'income').reduce((s, o) => s + o.amount, 0);
      shift.goodsExpense = goodsOps.filter(o => o.type === 'expense').reduce((s, o) => s + o.amount, 0);
      if (shift.status === 'Закрыта') {
        shift.endBalance = shift.startBalance + shift.cash + shift.deposit - shift.expense;
      } else {
        shift.endBalance = shift.startBalance + shift.deposit - shift.expense;
      }
      await dbPut('shifts', shift);

      if (i + 1 < sorted.length) {
        sorted[i + 1].startBalance = shift.endBalance;
      }
    }
  },

  async reopenShift(shiftId, userId) {
    const shift = await dbGet('shifts', shiftId);
    if (!shift || shift.status !== 'Закрыта') return null;

    const allShifts = await dbGetAll('shifts');
    const hasNewer = allShifts.some(s => s.id !== shiftId && new Date(s.openDate) > new Date(shift.openDate));
    if (hasNewer) return { error: 'has_newer_shifts' };

    const hasOpen = allShifts.some(s => s.status === 'Открыта');
    if (hasOpen) return { error: 'has_open_shift' };

    const oldData = { ...shift };
    shift.status = 'Открыта';
    shift.closeDate = null;
    shift.revenue = 0;
    shift.cash = 0;
    shift.cashless = 0;
    shift.endBalance = shift.startBalance + shift.deposit - shift.expense;
    shift.version = (shift.version || 1) + 1;
    await dbPut('shifts', shift);
    await logAudit(userId, 'REOPEN', 'shift', shiftId, { old: oldData, new: { status: shift.status, endBalance: shift.endBalance } });
    await this.recalcChain(shiftId);
    return shift;
  },
  async getShift(id) {
    return dbGet('shifts', id);
  },

  async getOpenShift() {
    const shifts = await dbGetAll('shifts');
    return shifts.find((s) => s.status === 'Открыта');
  },

  async getOpenShiftByUser(userId) {
    const shifts = await dbGetAll('shifts');
    return shifts.find((s) => s.status === 'Открыта' && s.employeeIds?.includes(userId));
  },

  async createShift(employeeId, shiftTypeId) {
    const shifts = await dbGetAll('shifts');
    if (shifts.some((s) => s.status === 'Открыта')) return null;

    const maxNumber = shifts.reduce((max, s) => Math.max(max, s.shiftNumber || 0), 0);
    const shiftNumber = maxNumber + 1;

    const closed = shifts
      .filter((s) => s.status === 'Закрыта')
      .sort((a, b) => new Date(b.closeDate || b.openDate) - new Date(a.closeDate || a.openDate));

    const startBalance = closed.length > 0 ? closed[0].endBalance : 0;

    const shift = {
      id: generateId(),
      shiftNumber,
      openDate: nowISO(),
      employeeIds: [employeeId],
      employeeShiftTypes: { [employeeId]: shiftTypeId || null },
      startBalance,
      revenue: 0,
      cash: 0,
      cashless: 0,
      deposit: 0,
      expense: 0,
      goodsIncome: 0,
      goodsExpense: 0,
      endBalance: startBalance,
      status: 'Открыта',
      closeDate: null,
      comment: '',
      editDeadline: null,
      version: 1,
      photoIds: [],
    };
    await dbPut('shifts', shift);
    await logAudit(employeeId, 'CREATE', 'shift', shift.id, { startBalance, employeeIds: [employeeId], shiftNumber });
    return shift;
  },

  async updateEmployeeShiftType(shiftId, employeeId, shiftTypeId) {
    const shift = await dbGet('shifts', shiftId);
    if (!shift || shift.status !== 'Открыта') return null;
    if (!shift.employeeShiftTypes) shift.employeeShiftTypes = {};
    shift.employeeShiftTypes[employeeId] = shiftTypeId || null;
    await dbPut('shifts', shift);
    return shift;
  },

  async addEmployeeToShift(shiftId, employeeId, shiftTypeId) {
    const shift = await dbGet('shifts', shiftId);
    if (!shift || shift.status !== 'Открыта') return null;
    if (!shift.employeeShiftTypes) shift.employeeShiftTypes = {};
    if (!shift.employeeIds.includes(employeeId)) {
      shift.employeeIds.push(employeeId);
    }
    shift.employeeShiftTypes[employeeId] = shiftTypeId || null;
    await dbPut('shifts', shift);
    return shift;
  },

  async removeEmployeeFromShift(shiftId, employeeId) {
    const shift = await dbGet('shifts', shiftId);
    if (!shift || shift.status !== 'Открыта') return null;
    shift.employeeIds = shift.employeeIds.filter(id => id !== employeeId);
    if (shift.employeeShiftTypes) delete shift.employeeShiftTypes[employeeId];
    await dbPut('shifts', shift);
    return shift;
  },

  async updateShiftPhotos(shiftId, photoIds) {
    const shift = await dbGet('shifts', shiftId);
    if (!shift) return null;
    shift.photoIds = photoIds;
    await dbPut('shifts', shift);
    return shift;
  },

  async updateShiftOpenDate(id, openDate) {
    const shift = await dbGet('shifts', id);
    if (!shift) return null;
    shift.openDate = new Date(openDate).toISOString();
    shift.version = (shift.version || 1) + 1;
    await dbPut('shifts', shift);
    await logAudit(null, 'UPDATE', 'shift', id, { field: 'openDate', openDate: shift.openDate });
    notifyChange('shifts');
    return shift;
  },

  async closeShift(shiftId, values, userId) {
    const shift = await dbGet('shifts', shiftId);
    if (!shift) return null;
    if (shift.status === 'Закрыта') return null;
    const oldData = { ...shift };
    shift.revenue = toNum(values.revenue);
    shift.cash = toNum(values.cash);
    shift.cashless = toNum(values.cashless);
    shift.deposit = toNum(values.deposit);
    shift.expense = toNum(values.expense);
    shift.endBalance = shift.startBalance + shift.cash + shift.deposit - shift.expense;
    shift.status = 'Закрыта';
    shift.closeDate = nowISO();
    shift.comment = values.comment || '';
    shift.version = (shift.version || 1) + 1;
    const user = await dbGet('users', userId);
    const now = Date.now();
    if (user?.role === 'seller') {
      shift.editDeadline = now + 3 * 3600000;
    } else if (user?.role === 'manager') {
      shift.editDeadline = now + 7 * 86400000;
    } else {
      shift.editDeadline = now + 365 * 86400000 * 100;
    }
    await dbPut('shifts', shift);
    await logAudit(userId, 'CLOSE', 'shift', shiftId, { old: oldData, new: { revenue: shift.revenue, cash: shift.cash, cashless: shift.cashless, expense: shift.expense, endBalance: shift.endBalance } });
    await this.recalcChain(shiftId);
    return shift;
  },

  async updateShift(shiftId, values, userId) {
    const shift = await dbGet('shifts', shiftId);
    if (!shift) return null;
    if (shift.status !== 'Закрыта') return null;
    if (shift.editDeadline && Date.now() > shift.editDeadline) return null;
    const oldData = { ...shift };
    shift.revenue = toNum(values.revenue, shift.revenue);
    shift.cash = toNum(values.cash, shift.cash);
    shift.cashless = toNum(values.cashless, shift.cashless);
    shift.deposit = toNum(values.deposit, shift.deposit);
    shift.expense = toNum(values.expense, shift.expense);
    shift.endBalance = shift.startBalance + shift.cash + shift.deposit - shift.expense;
    shift.comment = values.comment ?? shift.comment;
    if (values.openDate) shift.openDate = new Date(values.openDate).toISOString();
    if (values.closeDate) shift.closeDate = new Date(values.closeDate).toISOString();
    shift.version = (shift.version || 1) + 1;
    await dbPut('shifts', shift);
    await logAudit(userId, 'UPDATE', 'shift', shiftId, { old: oldData, new: values });
    await this.recalcChain(shiftId);
    return shift;
  },

  canEditShift(shift, user) {
    if (!shift || shift.status !== 'Закрыта') return false;
    if (!shift.editDeadline) {
      if (user.role === 'owner') return true;
      if (user.role === 'manager') return true;
      return false;
    }
    if (Date.now() > shift.editDeadline) return false;
    if (user.role === 'owner') return true;
    if (user.role === 'manager') return true;
    if (user.role === 'seller' && shift.employeeIds?.includes(user.id)) return true;
    return false;
  },

  canEditOperation(shift, user) {
    if (!shift) return false;
    if (shift.status === 'Открыта') {
      return shift.employeeIds?.includes(user.id) || user.role !== 'seller';
    }
    return this.canEditShift(shift, user);
  },

  async deleteShift(id, userId) {
    const shift = await dbGet('shifts', id);
    if (!shift) return false;
    const deletedOpenDate = shift.openDate;
    if (shift.status === 'Открыта') {
      const user = await dbGet('users', userId);
      if (user.role === 'owner' || user.role === 'manager') {
      } else if (!shift.employeeIds?.includes(userId)) {
        return false;
      }
      const ops = await dbGetAll('operations');
      for (const op of ops.filter(o => o.shiftId === id)) {
        await dbDelete('operations', op.id);
        for (const pid of op.photoIds || []) await dbDelete('photos', pid);
      }
      await dbDelete('shifts', id);
      await logAudit(userId, 'DELETE', 'shift', id, { status: 'Открыта' });
    }
    if (shift.status === 'Закрыта') {
      const user = await dbGet('users', userId);
      if (!this.canEditShift(shift, user)) return false;
      const ops = await dbGetAll('operations');
      for (const op of ops.filter(o => o.shiftId === id)) {
        await dbDelete('operations', op.id);
        for (const pid of op.photoIds || []) await dbDelete('photos', pid);
      }
      await dbDelete('shifts', id);
      await logAudit(userId, 'DELETE', 'shift', id, { status: 'Закрыта' });
    }
    const allShifts = await dbGetAll('shifts');
    const nextShift = allShifts
      .filter(s => new Date(s.openDate) > new Date(deletedOpenDate))
      .sort((a, b) => new Date(a.openDate) - new Date(b.openDate))[0];
    if (nextShift) await this.recalcChain(nextShift.id);
    return true;
  },

  async getOperation(id) {
    return dbGet('operations', id);
  },

  async updateOperation(opId, values, userId) {
    const op = await dbGet('operations', opId);
    if (!op) return null;
    const oldData = { ...op };
    op.amount = toNum(values.amount, op.amount);
    op.type = 'type' in values ? values.type : op.type;
    op.category = 'category' in values ? values.category : op.category;
    op.expenseTypeId = 'expenseTypeId' in values ? values.expenseTypeId : op.expenseTypeId;
    op.writeOffTypeId = 'writeOffTypeId' in values ? values.writeOffTypeId : op.writeOffTypeId;
    op.contractorId = 'contractorId' in values ? values.contractorId : op.contractorId;
    op.counterpartyId = 'counterpartyId' in values ? values.counterpartyId : op.counterpartyId;
    op.sourceId = 'sourceId' in values ? values.sourceId : op.sourceId;
    op.paymentFormId = 'paymentFormId' in values ? values.paymentFormId : op.paymentFormId;
    op.employeeId = 'employeeId' in values ? values.employeeId : op.employeeId;
    op.comment = 'comment' in values ? values.comment : op.comment;
    op.photoIds = 'photoIds' in values ? values.photoIds : op.photoIds;
    op.targetBalance = 'targetBalance' in values ? values.targetBalance : op.targetBalance;
    if (values.date) op.date = values.date;
    await dbPut('operations', op);
    await logAudit(userId, 'UPDATE', 'operation', opId, { old: oldData, new: values });

    if (op.shiftId) await this.recalcChain(op.shiftId);

    return op;
  },

  async deleteOperation(id, userId) {
    const op = await dbGet('operations', id);
    if (!op) return false;
    const shiftId = op.shiftId;
    for (const pid of op.photoIds || []) await dbDelete('photos', pid);
    await dbDelete('operations', id);
    await logAudit(userId, 'DELETE', 'operation', id, { amount: op.amount, type: op.type });

    if (shiftId) await this.recalcChain(shiftId);

    return true;
  },
  async getOperations() {
    return dbGetAll('operations');
  },

  async getOperationsByShift(shiftId) {
    const ops = await dbGetAll('operations');
    return ops.filter((o) => o.shiftId === shiftId).sort((a, b) => new Date(b.date) - new Date(a.date));
  },

  async getAllOperations() {
    return dbGetAll('operations');
  },

  async calculatePayroll(employeeId, year, month) {
    const allShifts = await dbGetAll('shifts');
    const refs = await this.getReferences();
    const shiftTypes = refs.shiftTypes || [];
    const expenseTypes = refs.expenseTypes || [];
    const salaryExpenseTypeIds = new Set(
      expenseTypes.filter(et => et.name === 'Заработная плата').map(et => et.id)
    );

    const startStr = localDateStr(new Date(year, month - 1, 1));
    const endStr = localDateStr(new Date(year, month, 1));

    const shifts = allShifts
      .filter(s => s.status === 'Закрыта')
      .filter(s => localDateStr(s.closeDate) >= startStr && localDateStr(s.closeDate) < endStr)
      .filter(s => s.employeeIds?.includes(employeeId))
      .sort((a, b) => new Date(b.closeDate) - new Date(a.closeDate));

    const lines = shifts.map(s => {
      const typeId = s.employeeShiftTypes?.[employeeId] ?? s.shiftTypeId ?? null;
      const type = shiftTypes.find(t => t.id === typeId);
      const baseSalary = type?.baseSalary || 0;
      const revenuePercent = type?.revenuePercent || 0;
      const percentAmount = Math.round((revenuePercent / 100) * (s.revenue || 0));
      const total = baseSalary + percentAmount;
      return {
        shiftId: s.id,
        shiftNumber: s.shiftNumber,
        date: s.closeDate,
        shiftTypeName: type?.name || '—',
        baseSalary,
        revenuePercent,
        revenue: s.revenue || 0,
        percentAmount,
        total,
      };
    });

    const allOps = await dbGetAll('operations');
    const paidFromOps = allOps
      .filter(o => o.type === 'expense')
      .filter(o => !o.category || o.category === 'cash')
      .filter(o => o.employeeId === employeeId)
      .filter(o => localDateStr(o.date) >= startStr && localDateStr(o.date) < endStr)
      .filter(o => salaryExpenseTypeIds.has(o.expenseTypeId))
      .reduce((sum, o) => sum + o.amount, 0);

    const allPayments = await dbGetAll('payrollPayments');
    const paidFromPayments = allPayments
      .filter(p => p.employeeId === employeeId && p.year === year && p.month === month)
      .reduce((sum, p) => sum + p.amount, 0);

    const total = lines.reduce((sum, l) => sum + l.total, 0);
    const paid = paidFromOps + paidFromPayments;
    return { lines, total, paid, paidFromOps, paidFromPayments };
  },

  async addPayrollPayment(payment) {
    const record = {
      id: generateId(),
      employeeId: payment.employeeId,
      amount: toNum(payment.amount),
      date: payment.date || nowISO(),
      comment: payment.comment || '',
      month: payment.month,
      year: payment.year,
    };
    await dbPut('payrollPayments', record);
    return record;
  },

  async getPayrollPayments(employeeId, year, month) {
    const all = await dbGetAll('payrollPayments');
    return all.filter(p =>
      p.employeeId === employeeId &&
      p.year === year &&
      p.month === month
    );
  },

  async calculatePayrollAll(year, month) {
    const allShifts = await dbGetAll('shifts');
    const refs = await this.getReferences();
    const shiftTypes = refs.shiftTypes || [];
    const expenseTypes = refs.expenseTypes || [];
    const salaryExpenseTypeIds = new Set(
      expenseTypes.filter(et => et.name === 'Заработная плата').map(et => et.id)
    );
    const users = await this.getUsers();
    const activeUsers = users.filter(u => u.active);

    const startStr = localDateStr(new Date(year, month - 1, 1));
    const endStr = localDateStr(new Date(year, month, 1));

    const closedShifts = allShifts
      .filter(s => s.status === 'Закрыта')
      .filter(s => localDateStr(s.closeDate) >= startStr && localDateStr(s.closeDate) < endStr);

    const allOps = await dbGetAll('operations');
    const allPayments = await dbGetAll('payrollPayments');

    return activeUsers.map(emp => {
      const empShifts = closedShifts.filter(s => s.employeeIds?.includes(emp.id));
      const lines = empShifts.map(s => {
        const typeId = s.employeeShiftTypes?.[emp.id] ?? s.shiftTypeId ?? null;
        const type = shiftTypes.find(t => t.id === typeId);
        const baseSalary = type?.baseSalary || 0;
        const revenuePercent = type?.revenuePercent || 0;
        const percentAmount = Math.round((revenuePercent / 100) * (s.revenue || 0));
        return {
          shiftId: s.id,
          shiftNumber: s.shiftNumber,
          date: s.closeDate,
          shiftTypeName: type?.name || '—',
          baseSalary,
          revenuePercent,
          revenue: s.revenue || 0,
          percentAmount,
          total: baseSalary + percentAmount,
        };
      }).sort((a, b) => (b.shiftNumber || 0) - (a.shiftNumber || 0));

      const paidFromOps = allOps
        .filter(o => o.type === 'expense')
        .filter(o => !o.category || o.category === 'cash')
        .filter(o => o.employeeId === emp.id)
        .filter(o => localDateStr(o.date) >= startStr && localDateStr(o.date) < endStr)
        .filter(o => salaryExpenseTypeIds.has(o.expenseTypeId))
        .reduce((sum, o) => sum + o.amount, 0);

      const paidFromPayments = allPayments
        .filter(p => p.employeeId === emp.id && p.year === year && p.month === month)
        .reduce((sum, p) => sum + p.amount, 0);

      const total = lines.reduce((sum, l) => sum + l.total, 0);
      const paid = paidFromOps + paidFromPayments;

      return {
        employeeId: emp.id,
        fullName: emp.fullName || emp.name,
        lines,
        total,
        paid,
      };
    }).filter(e => e.lines.length > 0 || e.paid > 0);
  },

  async addOperation(op, userId) {
    const operation = {
      id: generateId(),
      date: op.date || nowISO(),
      shiftId: op.shiftId || null,
      amount: toNum(op.amount),
      type: op.type,
      category: op.category || 'cash',
      expenseTypeId: op.expenseTypeId || null,
      writeOffTypeId: op.writeOffTypeId || null,
      contractorId: op.contractorId || null,
      counterpartyId: op.counterpartyId || null,
      sourceId: op.sourceId || null,
      employeeId: op.employeeId,
      paymentFormId: op.paymentFormId || null,
      comment: op.comment || '',
      photoIds: op.photoIds || [],
      targetBalance: op.targetBalance !== undefined ? op.targetBalance : null,
    };
    await dbPut('operations', operation);
    await logAudit(userId || op.employeeId, 'CREATE', 'operation', operation.id, { amount: operation.amount, type: operation.type, category: operation.category });
    if (operation.shiftId) await this.recalcChain(operation.shiftId);
    return operation;
  },

  async addPhoto(dataUrl) {
    const photo = { id: generateId(), dataUrl, createdAt: nowISO() };
    await dbPutRaw('photos', photo);
    return photo;
  },

  async getPhoto(id) {
    return dbGet('photos', id);
  },

  async deletePhoto(id) {
    return dbDelete('photos', id);
  },

  async getAuditLog(entityType, entityId) {
    return getAudit(entityType, entityId);
  },

  async getAllData() {
    const [shifts, operations, users, audit] = await Promise.all([
      dbGetAll('shifts'),
      dbGetAll('operations'),
      dbGetAll('users'),
      dbGetAll('audit'),
    ]);
    return { shifts, operations, users, audit };
  },
};
```

---

### src/githubSync.js

```javascript
// githubSync.js — синхронизация данных IndexedDB с репозиторием GitHub.
// Данные хранятся одним JSON-файлом в отдельной ветке (по умолчанию `data`),
// чтобы не засорять историю main. Фото НЕ синхронизируются (остаются на устройстве).
//
// Модель синхронизации: snapshot + мерж по записям.
// - Каждая запись имеет метку изменения __ut (ms). Побеждает новейшая (LWW).
// - Удаления передаются через tombstones: { "shifts:id": timestamp }.
// - Конфликт записи на GitHub (409) решается повторным мержем и ретраем.
// - Если одна и та же запись изменена и локально, и удалённо по-разному —
//   помимо автоматического LWW-выбора, обе версии сохраняются в стор
//   `conflicts` для ручного разбора владельцем/менеджером (см. getConflicts/resolveConflict).

import { _raw, setChangeListener } from './store.js';

const CFG_KEY = 'bistro24_sync_cfg';

const DEFAULT_CFG = {
  owner: 'pacman1988ninja-lgtm',
  repo: 'Bistro24',
  branch: 'data',
  path: 'bistro24-data.json',
};

const SYNCED_COLLECTIONS = ['shifts', 'operations', 'users', 'payrollPayments'];

let cfg = null;
let syncing = false;
let pushTimer = null;
let intervalId = null;
let status = { state: 'off', lastSync: null, error: null };
const listeners = new Set();
const conflictListeners = new Set();

function setStatus(patch) {
  status = { ...status, ...patch };
  listeners.forEach(fn => { try { fn(status); } catch { /* ignore */ } });
}

export function subscribeStatus(fn) {
  listeners.add(fn);
  fn(status);
  return () => listeners.delete(fn);
}

export function subscribeConflicts(fn) {
  conflictListeners.add(fn);
  getConflicts().then(fn);
  return () => conflictListeners.delete(fn);
}

async function notifyConflicts() {
  const list = await getConflicts();
  conflictListeners.forEach(fn => { try { fn(list); } catch { /* ignore */ } });
}

export function getSyncConfig() {
  if (!cfg) {
    try {
      const raw = localStorage.getItem(CFG_KEY);
      cfg = raw ? JSON.parse(raw) : null;
    } catch {
      cfg = null;
    }
  }
  return cfg ? { ...cfg, token: cfg.token ? '•••' : '' } : null;
}

function loadRawConfig() {
  try {
    const raw = localStorage.getItem(CFG_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function checkTokenFormat(token) {
  const t = (token || '').trim();
  if (!t) return null;
  if (t.startsWith('github_pat_')) return null;
  if (t.startsWith('ghp_') || t.startsWith('gho_') || t.startsWith('ghu_') || t.startsWith('ghs_')) {
    return 'Похоже на classic-токен GitHub — он даёт доступ ко всему аккаунту. Рекомендуется создать fine-grained PAT с доступом только к этому репозиторию (Settings → Developer settings → Fine-grained tokens).';
  }
  return null;
}

export function saveSyncConfig({ token, owner, repo, branch, path }) {
  cfg = {
    owner: (owner || DEFAULT_CFG.owner).trim(),
    repo: (repo || DEFAULT_CFG.repo).trim(),
    branch: (branch || DEFAULT_CFG.branch).trim(),
    path: (path || DEFAULT_CFG.path).trim(),
    token: token.trim(),
  };
  localStorage.setItem(CFG_KEY, JSON.stringify(cfg));
  setStatus({ state: 'idle', error: null });
  setupSyncTimers();
}

export function clearSyncConfig() {
  cfg = null;
  localStorage.removeItem(CFG_KEY);
  if (pushTimer) clearTimeout(pushTimer);
  setStatus({ state: 'off', error: null });
}

async function ghFetch(url, options = {}) {
  const res = await fetch(url, {
    ...options,
    headers: {
      'Authorization': `Bearer ${cfg.token}`,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(options.headers || {}),
    },
  });
  if (res.status === 404) {
    const err = new Error('not_found');
    err.status = 404;
    throw err;
  }
  if (res.status === 409) {
    const err = new Error('conflict');
    err.status = 409;
    throw err;
  }
  if (res.status === 401 || res.status === 403) {
    const err = new Error('Нет доступа к репозиторию. Проверьте токен (нужны права contents: read/write).');
    err.status = res.status;
    throw err;
  }
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    const err = new Error(`GitHub API: ${res.status} ${text.slice(0, 200)}`);
    err.status = res.status;
    throw err;
  }
  return res.json();
}

function repoBase() {
  return `https://api.github.com/repos/${cfg.owner}/${cfg.repo}`;
}

function b64ToString(b64) {
  const bin = atob(b64.replace(/\n/g, ''));
  const bytes = Uint8Array.from(bin, ch => ch.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function stringToB64(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = '';
  const chunk = 8192;
  for (let i = 0; i < bytes.length; i += chunk) {
    bin += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
  }
  return btoa(bin);
}

async function ghGetDataFile() {
  try {
    const res = await ghFetch(`${repoBase()}/contents/${cfg.path}?ref=${encodeURIComponent(cfg.branch)}`);
    return { sha: res.sha, json: JSON.parse(b64ToString(res.content)) };
  } catch (e) {
    if (e.status === 404) return null;
    throw e;
  }
}

async function ghPutDataFile(snapshot, sha) {
  const body = {
    message: `data: sync ${new Date().toISOString()}`,
    content: stringToB64(JSON.stringify(snapshot)),
    branch: cfg.branch,
  };
  if (sha) body.sha = sha;
  return ghFetch(`${repoBase()}/contents/${cfg.path}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

async function ensureBranch() {
  try {
    await ghFetch(`${repoBase()}/git/ref/heads/${encodeURIComponent(cfg.branch)}`);
  } catch (e) {
    if (e.status !== 404) throw e;
    const mainRef = await ghFetch(`${repoBase()}/git/ref/heads/main`);
    await ghFetch(`${repoBase()}/git/refs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ref: `refs/heads/${cfg.branch}`, sha: mainRef.object.sha }),
    });
  }
}

async function exportSnapshot() {
  const [shifts, operations, users, payrollPayments, refsDoc, audit, tombstones] = await Promise.all([
    _raw.getAll('shifts'),
    _raw.getAll('operations'),
    _raw.getAll('users'),
    _raw.getAll('payrollPayments'),
    _raw.get('references', 'main'),
    _raw.getAll('audit'),
    _raw.getTombstones(),
  ]);
  return {
    app: 'bistro24',
    v: 2,
    exportedAt: new Date().toISOString(),
    shifts,
    operations,
    users,
    payrollPayments,
    references: refsDoc || null,
    audit,
    tombstones,
  };
}

function contentEqual(a, b) {
  if (!a || !b) return false;
  const strip = (o) => { const { __ut, ...rest } = o; return rest; };
  return JSON.stringify(strip(a)) === JSON.stringify(strip(b));
}

async function recordConflict(collection, id, local, remote) {
  const existing = await _raw.getAll('conflicts');
  const dup = existing?.find(c => c.collection === collection && c.recordId === id && !c.resolved);
  if (dup) {
    dup.local = local;
    dup.remote = remote;
    dup.detectedAt = Date.now();
    await _raw.putRaw('conflicts', dup);
    return;
  }
  const conflict = {
    id: `${collection}:${id}:${Date.now()}`,
    collection,
    recordId: id,
    local,
    remote,
    detectedAt: Date.now(),
    resolved: false,
  };
  await _raw.putRaw('conflicts', conflict);
}

async function mergeSnapshot(remote) {
  if (!remote || typeof remote !== 'object') return;

  const localTomb = await _raw.getTombstones();
  const mergedTomb = { ...localTomb };
  for (const [k, v] of Object.entries(remote.tombstones || {})) {
    mergedTomb[k] = Math.max(mergedTomb[k] || 0, v);
  }

  for (const collName of SYNCED_COLLECTIONS) {
    const remoteRecs = Array.isArray(remote[collName]) ? remote[collName] : [];
    const localRecs = await _raw.getAll(collName);
    const localMap = new Map(localRecs.map(r => [r.id, r]));
    const remoteMap = new Map(remoteRecs.map(r => [r.id, r]));
    const ids = new Set([...localMap.keys(), ...remoteMap.keys()]);

    for (const id of ids) {
      const l = localMap.get(id);
      const r = remoteMap.get(id);
      const lut = l?.__ut || 0;
      const rut = r?.__ut || 0;
      const t = mergedTomb[`${collName}:${id}`] || 0;

      if (t && t >= Math.max(lut, rut)) {
        if (l) await _raw.deleteRaw(collName, id);
        continue;
      }

      if (l && r && !contentEqual(l, r)) {
        await recordConflict(collName, id, l, r);
      }

      const winner = !l ? r : !r ? l : (rut > lut ? r : l);
      if (winner && winner !== l) await _raw.putRaw(collName, winner);
    }
  }

  const rdoc = remote.references;
  const ldoc = await _raw.get('references', 'main');
  const refTomb = mergedTomb['references:main'] || 0;
  if (!(refTomb && refTomb >= Math.max(ldoc?.__ut || 0, rdoc?.__ut || 0))) {
    if (rdoc && ldoc && !contentEqual(rdoc, ldoc) && (rdoc.__ut || 0) !== (ldoc.__ut || 0)) {
      if ((rdoc.__ut || 0) > (ldoc.__ut || 0)) {
        await recordConflict('references', 'main', ldoc, rdoc);
      }
    }
    if (rdoc && (rdoc.__ut || 0) > (ldoc?.__ut || 0)) {
      await _raw.putRaw('references', rdoc);
    }
  }

  const localAudit = await _raw.getAll('audit');
  const known = new Set(localAudit.map(a => a.id));
  for (const a of remote.audit || []) {
    if (a && a.id && !known.has(a.id)) await _raw.putRaw('audit', a);
  }

  await _raw.putRaw('meta', { key: 'tombstones', map: mergedTomb });
  await notifyConflicts();
}

export async function getConflicts() {
  const all = await _raw.getAll('conflicts');
  return all.filter(c => !c.resolved).sort((a, b) => b.detectedAt - a.detectedAt);
}

export async function resolveConflict(conflictId, keep) {
  const all = await _raw.getAll('conflicts');
  const c = all.find(x => x.id === conflictId);
  if (!c) return false;
  const chosen = keep === 'remote' ? c.remote : c.local;
  if (chosen) {
    const { __ut, ...rest } = chosen;
    await _raw.putRaw(c.collection, { ...rest, __ut: Date.now() });
  }
  c.resolved = true;
  await _raw.putRaw('conflicts', c);
  await notifyConflicts();
  schedulePush();
  return true;
}

export async function syncNow() {
  if (!cfg?.token) return false;
  if (syncing) return false;
  if (!navigator.onLine) {
    setStatus({ state: 'error', error: 'Нет сети. Данные сохранены локально, синхронизация выполнится позже.' });
    return false;
  }
  syncing = true;
  setStatus({ state: 'syncing', error: null });
  try {
    await ensureBranch();
    for (let attempt = 0; attempt < 3; attempt++) {
      const remote = await ghGetDataFile();
      if (remote?.json) await mergeSnapshot(remote.json);
      const snapshot = await exportSnapshot();
      try {
        await ghPutDataFile(snapshot, remote?.sha);
        setStatus({ state: 'ok', lastSync: Date.now(), error: null });
        return true;
      } catch (e) {
        if (e.status === 409 && attempt < 2) continue;
        throw e;
      }
    }
    return false;
  } catch (e) {
    setStatus({ state: 'error', error: e.message || String(e) });
    return false;
  } finally {
    syncing = false;
  }
}

export function schedulePush() {
  if (!cfg?.token) return;
  if (pushTimer) clearTimeout(pushTimer);
  pushTimer = setTimeout(() => { syncNow(); }, 8000);
}

export function initSync() {
  cfg = loadRawConfig();
  setChangeListener(schedulePush);
  if (cfg?.token) setupSyncTimers();
}

function setupSyncTimers() {
  if (!cfg?.token) return;
  setStatus({ state: 'idle' });
  syncNow();
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(() => {
    if (cfg?.token && navigator.onLine && !document.hidden) syncNow();
  }, 120000);
  window.addEventListener('online', () => { if (cfg?.token) syncNow(); });
}
```

---

### src/appsheetSeed.js

```javascript
export const APPSHEET_SEED = {
  employees: [
    { name: "Евдокимова Екатерина", role: "manager", email: "katena.evdokimova.2019@inbox.ru" },
    { name: "Алина", role: "seller", email: "alinavarankina2005@gmail.com" },
    { name: "Инна", role: "seller", email: "" },
    { name: "Гук Галина Игнатьевна", role: "seller", email: "" },
    { name: "Наталья Паршутина", role: "seller", email: "n55995943@gmail.com" },
    { name: "Надежда Сергеевна", role: "seller", email: "" },
    { name: "Олеся Мельник", role: "seller", email: "melnik0lesya@yandex.ru" },
  ],
  contractors: ["Уборщица", "Пряник Гена", "Рябых Сергей"],
  counterparties: [
    "ИП Кузина К.А. Деньги",
    "ИП Кузина К.А. Товар",
    "Метро",
    "Сладкая Жизнь /Карпин",
    "ООО \"ПАРТНЕР\"",
    "ООО \"ПИВСТАР\"",
    "ООО \"Версаль\" (Арт - Логистик)",
    "Коробов",
    "Лобунов",
    "АО \"Брянскпиво\"",
    "Посуда",
    "Система кпд",
  ],
  expenseTypes: [
    { name: "Заработная плата", linkedRef: "employees" },
    { name: "Подрядчик", linkedRef: "contractors" },
    { name: "Контрагент", linkedRef: "counterparties" },
    { name: "Хоз.нужды", linkedRef: "" },
    { name: "Прочие выплаты", linkedRef: "" },
  ],
};
```

---

### src/index.css

```css
:root {
  --bg: #0f0f1a;
  --surface: #1a1a2e;
  --surface-light: #252540;
  --primary: #e94560;
  --primary-dark: #c13651;
  --text: #ffffff;
  --text-secondary: #a0a0b8;
  --success: #4caf50;
  --warning: #ff9800;
  --danger: #f44336;
  --info: #2196f3;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html, body, #root { height: 100%; background: var(--bg); color: var(--text); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; overflow: hidden; }

.app-container {
  height: 100dvh; display: flex; flex-direction: column;
  max-width: 430px; margin: 0 auto; background: var(--bg); position: relative;
  padding-top: env(safe-area-inset-top);
}

.main-content {
  flex: 1; overflow-y: auto; overflow-x: hidden;
  padding: 16px; padding-bottom: 130px;
  -webkit-overflow-scrolling: touch; touch-action: pan-y;
}

.page-header { margin-bottom: 20px; padding-top: 8px; }
.page-header h1 { font-size: 28px; font-weight: 700; margin-bottom: 4px; }
.page-header p { color: var(--text-secondary); font-size: 14px; }

.card {
  background: var(--surface); border-radius: 16px; padding: 16px;
  margin-bottom: 12px; border: 1px solid rgba(255,255,255,0.05);
}
.card-title { font-size: 12px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
.card-value { font-size: 32px; font-weight: 700; font-variant-numeric: tabular-nums; }

.btn {
  width: 100%; padding: 16px; border-radius: 12px; border: none;
  font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.2s;
  display: flex; align-items: center; justify-content: center; gap: 8px;
}
.btn:active { transform: scale(0.98); }
.btn-primary { background: var(--primary); color: white; }
.btn-secondary { background: var(--surface-light); color: var(--text); }
.btn-success { background: var(--success); color: white; }
.btn-danger { background: var(--danger); color: white; }
.btn-info { background: var(--info); color: white; }
.btn:disabled { opacity: 0.5; pointer-events: none; }

.form-group { margin-bottom: 16px; }
.form-label { display: block; font-size: 12px; color: var(--text-secondary); margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; }
.form-input, .form-select {
  width: 100%; padding: 14px; border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.1); background: var(--surface-light);
  color: var(--text); font-size: 16px; outline: none;
  -webkit-appearance: none; appearance: none;
}
input[type="datetime-local"].form-input {
  -webkit-appearance: textfield;
  appearance: auto;
  background: var(--surface-light);
  color: var(--text);
  font-family: inherit;
  height: auto;
}
input[type="datetime-local"]::-webkit-calendar-picker-indicator {
  filter: invert(1);
  opacity: 0.6;
  cursor: pointer;
}
.form-input:focus, .form-select:focus { border-color: var(--primary); }

.list-item {
  background: var(--surface); border-radius: 12px; padding: 14px;
  margin-bottom: 8px; display: flex; justify-content: space-between;
  align-items: center; border: 1px solid rgba(255,255,255,0.05);
}
.list-item-info h3 { font-size: 16px; margin-bottom: 4px; }
.list-item-info p { font-size: 13px; color: var(--text-secondary); }
.list-item-amount { font-size: 18px; font-weight: 700; font-variant-numeric: tabular-nums; }
.amount-income { color: var(--success); }
.amount-expense { color: var(--danger); }

.badge { display: inline-block; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; }
.badge-open { background: rgba(76,175,80,0.2); color: var(--success); }
.badge-closed { background: rgba(160,160,184,0.2); color: var(--text-secondary); }

.bottom-nav {
  position: fixed; bottom: 0; left: 50%; transform: translateX(-50%);
  width: 100%; max-width: 430px; background: rgba(26,26,46,0.95);
  backdrop-filter: blur(20px); border-top: 1px solid rgba(255,255,255,0.05);
  display: flex;
  padding: 8px 0 calc(8px + env(safe-area-inset-bottom)); z-index: 100;
}
.nav-item { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 4px 2px; color: var(--text-secondary); text-decoration: none; font-size: 10px; transition: color 0.2s; }
.nav-item.active { color: var(--primary); }
.nav-item svg { width: 22px; height: 22px; stroke-width: 2; }

.stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; }
.stat-card { background: var(--surface); border-radius: 16px; padding: 16px; text-align: center; }
.stat-card h3 { font-size: 11px; color: var(--text-secondary); margin-bottom: 8px; text-transform: uppercase; }
.stat-card p { font-size: 22px; font-weight: 700; font-variant-numeric: tabular-nums; }

.empty-state { text-align: center; padding: 40px 20px; color: var(--text-secondary); }
.main-content::-webkit-scrollbar { display: none; }

.photo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 12px; }
.photo-thumb { width: 100%; aspect-ratio: 1; border-radius: 8px; object-fit: cover; background: var(--surface-light); }

.role-badge { display: inline-block; padding: 2px 8px; border-radius: 12px; font-size: 11px; font-weight: 600; margin-left: 8px; }
.role-seller { background: rgba(33,150,243,0.2); color: #64b5f6; }
.role-manager { background: rgba(255,152,0,0.2); color: #ffb74d; }
.role-owner { background: rgba(233,69,96,0.2); color: #ef5350; }
```

---

### src/App.css

```css
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}
```

---

### src/components/BottomNav.jsx

```jsx
import { NavLink } from 'react-router-dom';
import { Home, Settings, FileText, Wallet, Handshake } from 'lucide-react';

export default function BottomNav({ user }) {
  if (!user) return null;
  const isManager = user.role === 'manager' || user.role === 'owner';
  const isOwner = user.role === 'owner';
  const isSeller = user.role === 'seller';

  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')} end>
        <Home size={22} /><span>Смены</span>
      </NavLink>
      <NavLink to="/payroll" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
        <Wallet size={22} /><span>Зарплата</span>
      </NavLink>
      {!isSeller && (
        <NavLink to="/operations" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
          <FileText size={22} /><span>Операции</span>
        </NavLink>
      )}
      {isManager && (
        <NavLink to="/settlements" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
          <Handshake size={22} /><span>Взаиморасчёты</span>
        </NavLink>
      )}
      <NavLink to="/settings" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
        <Settings size={22} /><span>Настройки</span>
      </NavLink>
    </nav>
  );
}
```

---

### src/components/ExportExcel.jsx

```jsx
import { Download } from 'lucide-react';
import * as XLSX from 'xlsx';
import { store } from '../store';

export default function ExportExcel() {
  const handleExport = async () => {
    const data = await store.getAllData();
    const refs = await store.getReferences();
    const wb = XLSX.utils.book_new();

    const shiftsWs = XLSX.utils.json_to_sheet(data.shifts.map(s => ({
      ID: s.id, 'Дата открытия': s.openDate, Сотрудник: s.employeeId,
      'Остаток на начало': s.startBalance, Выручка: s.revenue,
      Наличные: s.cash, Безнал: s.cashless, Внесение: s.deposit,
      Расход: s.expense, 'Остаток на конец': s.endBalance,
      Статус: s.status, 'Дата закрытия': s.closeDate || '', Комментарий: s.comment,
    })));
    XLSX.utils.book_append_sheet(wb, shiftsWs, 'Смены');

    const getName = (list, id) => refs[list]?.find(x => x.id === id)?.name || id;
    const opsWs = XLSX.utils.json_to_sheet(data.operations.map(o => ({
      ID: o.id, Дата: o.date, 'ID смены': o.shiftId, Сумма: o.amount,
      Тип: o.type === 'income' ? 'Приход' : 'Расход',
      Категория: o.category === 'goods' ? 'Товар' : 'Наличные',
      'Статья расхода': getName('expenseTypes', o.expenseTypeId),
      'Форма оплаты': getName('paymentForms', o.paymentFormId),
      'Источник дохода': getName('incomeSources', o.sourceId),
      Контрагент: getName('contractors', o.contractorId) || getName('counterparties', o.counterpartyId),
      Сотрудник: getName('employees', o.employeeId),
      Комментарий: o.comment,
    })));
    XLSX.utils.book_append_sheet(wb, opsWs, 'Операции');

    const usersWs = XLSX.utils.json_to_sheet(data.users.map(u => ({
      ID: u.id, Имя: u.fullName, Email: u.email, Роль: u.role,
      PIN: u.pin, Активен: u.active ? 'Да' : 'Нет',
    })));
    XLSX.utils.book_append_sheet(wb, usersWs, 'Сотрудники');

    const refsData = [];
    for (const [key, list] of Object.entries(refs)) {
      if (Array.isArray(list)) {
        list.forEach(item => refsData.push({ Справочник: key, ID: item.id, Название: item.name, Активен: item.active ? 'Да' : 'Нет' }));
      }
    }
    const refsWs = XLSX.utils.json_to_sheet(refsData);
    XLSX.utils.book_append_sheet(wb, refsWs, 'Справочники');

    XLSX.writeFile(wb, `Бистро24_${new Date().toISOString().slice(0,10)}.xlsx`);
  };
  return (
    <button className="btn btn-secondary" onClick={handleExport} style={{ marginBottom: 16 }}>
      <Download size={18} /> Выгрузить в Excel
    </button>
  );
}
```

---

### src/components/PhotoCapture.jsx

```jsx
import { useState, useEffect } from 'react';
import { Camera, X, ImagePlus } from 'lucide-react';
import { store } from '../store';

export default function PhotoCapture({ photoIds, onChange }) {
  const [photos, setPhotos] = useState(photoIds || []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPhotos(photoIds || []);
  }, [photoIds]);

  const compressImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const maxWidth = 800;
          const scale = Math.min(1, maxWidth / img.width);
          canvas.width = img.width * scale;
          canvas.height = img.height * scale;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL('image/jpeg', 0.7));
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  const handleCapture = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setLoading(true);
    const newIds = [];
    for (const file of files) {
      const dataUrl = await compressImage(file);
      const photo = await store.addPhoto(dataUrl);
      newIds.push(photo.id);
    }
    setPhotos(prev => {
      const combined = [...prev, ...newIds];
      onChange(combined);
      return combined;
    });
    setLoading(false);
    e.target.value = '';
  };

  const removePhoto = async (id) => {
    await store.deletePhoto(id);
    const newIds = photos.filter((p) => p !== id);
    setPhotos(newIds);
    onChange(newIds);
  };

  return (
    <div className="form-group">
      <label className="form-label">Фото первички</label>
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        <label className="btn btn-secondary" style={{ flex: 1, padding: 12 }}>
          <Camera size={16} /> Камера
          <input type="file" accept="image/*" capture="environment" onChange={handleCapture} style={{ display: 'none' }} />
        </label>
        <label className="btn btn-secondary" style={{ flex: 1, padding: 12 }}>
          <ImagePlus size={16} /> Галерея
          <input type="file" accept="image/*" multiple onChange={handleCapture} style={{ display: 'none' }} />
        </label>
      </div>
      {loading && <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>Сжатие...</p>}
      <div className="photo-grid">
        {photos.map((id) => (
          <div key={id} style={{ position: 'relative' }}>
            <PhotoThumb photoId={id} />
            <button onClick={() => removePhoto(id)} style={{ position: 'absolute', top: 4, right: 4, background: 'var(--danger)', border: 'none', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhotoThumb({ photoId }) {
  const [src, setSrc] = useState('');
  useEffect(() => {
    store.getPhoto(photoId).then(p => p && setSrc(p.dataUrl));
  }, [photoId]);
  return <img src={src || ''} alt="" className="photo-thumb" />;
}
```

---

### src/pages/AllOperations.jsx

```jsx
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { store } from '../store';
import { Package, Receipt, Filter, Trash2, Edit3, X } from 'lucide-react';

export default function AllOperations({ user }) {
  const navigate = useNavigate();
  const [ops, setOps] = useState([]);
  const [refs, setRefs] = useState({});
  const [users, setUsers] = useState([]);
  const [shifts, setShifts] = useState([]);
  const [photos, setPhotos] = useState({});
  const [filterType, setFilterType] = useState('all');
  const [filterRefType, setFilterRefType] = useState('');
  const [filterRefId, setFilterRefId] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const refTypeOptions = [
    { key: 'counterparties', label: 'Контрагенты' },
    { key: 'incomeSources', label: 'Источники поступления' },
    { key: 'expenseTypes', label: 'Статьи расхода' },
    { key: 'employees', label: 'Сотрудники' },
    { key: 'contractors', label: 'Подрядчики' },
    { key: 'writeOffTypes', label: 'Типы списания' },
  ];

  useEffect(() => {
    if (user?.role === 'seller') {
      navigate('/');
      return;
    }
    load();
  }, []);

  const load = async () => {
    const o = await store.getAllOperations();
    const r = await store.getReferences();
    const u = await store.getUsers();
    const s = await store.getShifts();
    setOps(o.sort((a, b) => new Date(b.date) - new Date(a.date)));
    setRefs(r);
    setUsers(u);
    setShifts(s);
    const ph = {};
    for (const op of o) {
      for (const pid of op.photoIds || []) {
        const p = await store.getPhoto(pid);
        if (p) ph[pid] = p.dataUrl;
      }
    }
    setPhotos(ph);
  };

  const handleDelete = async (opId) => {
    if (!confirm('Удалить операцию?')) return;
    await store.deleteOperation(opId, user.id);
    load();
  };

  const getName = (list, id) => refs[list]?.find(x => x.id === id)?.name || '-';
  const getUserName = (id) => users.find(u => u.id === id)?.fullName || '—';
  const getShiftInfo = (shiftId) => {
    const s = shifts.find(sh => sh.id === shiftId);
    return s ? `Смена #${s.shiftNumber || s.id.slice(-4)}` : '—';
  };
  const getRelatedName = (op) => {
    if (op.category === 'goods') {
      const parts = [];
      if (op.writeOffTypeId) parts.push(getName('writeOffTypes', op.writeOffTypeId));
      if (op.counterpartyId) parts.push(getName('counterparties', op.counterpartyId));
      return parts.length > 0 ? parts.join(' • ') : null;
    }
    if (op.sourceId) return getName('incomeSources', op.sourceId);
    if (op.contractorId) return getName('contractors', op.contractorId);
    if (op.counterpartyId) return getName('counterparties', op.counterpartyId);
    // Для расходов на зарплату employeeId содержит получателя, а не создателя
    if (op.type === 'expense' && op.employeeId) {
      const expenseType = refs.expenseTypes?.find(t => t.id === op.expenseTypeId);
      if (expenseType?.linkedRef === 'employees') {
        return getName('employees', op.employeeId);
      }
    }
    return null;
  };
  const canEditOp = (shiftId) => {
    if (!shiftId) return true;
    const s = shifts.find(sh => sh.id === shiftId);
    return s?.status === 'Открыта' && store.canEditOperation(s, user);
  };

  const selectedRefLabel = refTypeOptions.find(r => r.key === filterRefType)?.label || 'Элемент';

  const handleTypeChange = (value) => {
    setFilterType(value);
  };

  const handleRefTypeChange = (value) => {
    setFilterRefType(value);
    setFilterRefId('');
  };

  const hasActiveFilters = filterType !== 'all' || filterRefType;

  const resetFilters = () => {
    setFilterType('all');
    setFilterRefType('');
    setFilterRefId('');
  };

  const filtered = ops.filter(op => {
    if (filterType === 'income' && op.type !== 'income') return false;
    if (filterType === 'expense' && op.type !== 'expense') return false;
    if (filterRefType && filterRefId) {
      if (filterRefType === 'counterparties' && op.counterpartyId !== filterRefId) return false;
      if (filterRefType === 'incomeSources' && op.sourceId !== filterRefId) return false;
      if (filterRefType === 'expenseTypes' && op.expenseTypeId !== filterRefId) return false;
      if (filterRefType === 'employees' && op.employeeId !== filterRefId) return false;
      if (filterRefType === 'contractors' && op.contractorId !== filterRefId) return false;
      if (filterRefType === 'writeOffTypes' && op.writeOffTypeId !== filterRefId) return false;
    }
    return true;
  });

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12, paddingTop: 'env(safe-area-inset-top)' }}>
        <button className="btn btn-success" onClick={() => navigate('/goods-operation/new')} style={{ flex: 1, padding: '14px 0', fontSize: 15 }}>
          <Package size={20} style={{ marginRight: 6, verticalAlign: 'middle' }} /> Товарная
        </button>
        <button className="btn btn-danger" onClick={() => navigate('/cash-operation/new')} style={{ flex: 1, padding: '14px 0', fontSize: 15 }}>
          <Receipt size={20} style={{ marginRight: 6, verticalAlign: 'middle' }} /> Безналичная
        </button>
      </div>

      <button className="btn btn-secondary" onClick={() => setShowFilters(!showFilters)} style={{ marginBottom: 12, position: 'relative' }}>
        <Filter size={18} /> Фильтры
        {hasActiveFilters && (
          <span style={{ position: 'absolute', top: -4, right: -4, width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)' }} />
        )}
      </button>

      {showFilters && (
        <div className="card" style={{ marginBottom: 16 }}>
          <div className="form-group" style={{ marginBottom: 12 }}>
            <label className="form-label">Тип операции</label>
            <select className="form-select" value={filterType} onChange={e => handleTypeChange(e.target.value)}>
              <option value="all">Все операции</option>
              <option value="income">Приход</option>
              <option value="expense">Расход</option>
            </select>
          </div>

          <div className="form-group" style={{ marginBottom: 12 }}>
            <label className="form-label">Справочник</label>
            <select className="form-select" value={filterRefType} onChange={e => handleRefTypeChange(e.target.value)}>
              <option value="">Все справочники</option>
              {refTypeOptions.map(r => (
                <option key={r.key} value={r.key}>{r.label}</option>
              ))}
            </select>
          </div>

          {filterRefType && (
            <div className="form-group" style={{ marginBottom: 12 }}>
              <label className="form-label">{selectedRefLabel}</label>
              <select className="form-select" value={filterRefId} onChange={e => setFilterRefId(e.target.value)}>
                <option value="">Все</option>
                {refs[filterRefType]?.filter(t => t.active).map(t => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
            </div>
          )}

          {hasActiveFilters && (
            <button className="btn btn-secondary" onClick={resetFilters} style={{ fontSize: 13 }}>
              <X size={14} style={{ marginRight: 4 }} /> Сбросить фильтр
            </button>
          )}
        </div>
      )}

      {filtered.length === 0 && <div className="empty-state">Нет операций</div>}

      {filtered.map(op => (
        <div key={op.id} className="card" style={{ marginBottom: 12 }}>
          <div className="list-item" style={{ marginBottom: 0, padding: 0, background: 'none', border: 'none' }}>
            <div className="list-item-info" style={{ flex: 1 }}>
              {op.category === 'goods' ? (
                <>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff' }}>
                    {op.type === 'income'
                      ? (getName('counterparties', op.counterpartyId) || '—')
                      : (getName('writeOffTypes', op.writeOffTypeId) || 'Товарное списание')}
                  </h3>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>
                    {op.type === 'income' ? 'Товарный приход' : 'Товарное списание'}
                  </p>
                  <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>{new Date(op.date).toLocaleString('ru-RU')}</p>
                  <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{getShiftInfo(op.shiftId)} • {getUserName(op.employeeId)}</p>
                  <p style={{ fontSize: 11, color: 'var(--success)', marginTop: 4 }}>товар</p>
                </>
              ) : (
                <>
                  <h3>{getName('expenseTypes', op.expenseTypeId) || (op.type === 'income' ? 'Внесение' : 'Расход')}</h3>
                  <p>{new Date(op.date).toLocaleString('ru-RU')} • {getName('paymentForms', op.paymentFormId)}</p>
                  <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{getShiftInfo(op.shiftId)} • {getUserName(op.employeeId)}</p>
                  {getRelatedName(op) && <p style={{ fontSize: 12, marginTop: 2, color: 'var(--text-secondary)' }}>{getRelatedName(op)}</p>}
                </>
              )}
              {op.comment && <p style={{ fontSize: 12, marginTop: 4, fontStyle: 'italic' }}>{op.comment}</p>}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div className={'list-item-amount ' + (op.type === 'income' ? 'amount-income' : 'amount-expense')}>
                {op.type === 'income' ? '+' : '-'}{op.amount.toLocaleString('ru-RU')} ₽
              </div>
              {canEditOp(op.shiftId) && (
                <>
                  <button onClick={() => navigate(op.shiftId ? `/shift/${op.shiftId}/operations/${op.id}/edit` : `/operation/${op.id}/edit`)} style={{ background: 'var(--surface-light)', border: 'none', borderRadius: 6, padding: 8, color: 'var(--text)' }}>
                    <Edit3 size={14} />
                  </button>
                  <button onClick={() => handleDelete(op.id)} style={{ background: 'var(--danger)', border: 'none', borderRadius: 6, padding: 8, color: '#fff' }}>
                    <Trash2 size={14} />
                  </button>
                </>
              )}
            </div>
          </div>
          {op.photoIds?.length > 0 && (
            <div className="photo-grid" style={{ marginTop: 12 }}>
              {op.photoIds.map(pid => (
                <img key={pid} src={photos[pid] || ''} alt="" className="photo-thumb" style={{ borderRadius: 8 }} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
```

---

### src/pages/CloseShift.jsx

```jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { store, toNum } from '../store';
import { ArrowLeft, AlertCircle, Lock, Calculator, Camera, ImagePlus, X } from 'lucide-react';

function PhotoThumb({ photoId }) {
  const [src, setSrc] = useState('');
  useEffect(() => {
    store.getPhoto(photoId).then(p => p && setSrc(p.dataUrl));
  }, [photoId]);
  return <img src={src || ''} alt="" className="photo-thumb" />;
}

export default function CloseShift({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shift, setShift] = useState(null);
  const [loading, setLoading] = useState(true);
  const [opsExpense, setOpsExpense] = useState(0);
  const [opsIncome, setOpsIncome] = useState(0);
  const [revenue, setRevenue] = useState('');
  const [cash, setCash] = useState('');
  const [cashless, setCashless] = useState('');
  const [comment, setComment] = useState('');
  const [photoIds, setPhotoIds] = useState([]);
  const [photoBusy, setPhotoBusy] = useState(false);

  useEffect(() => {
    let mounted = true;
    store.getShift(id).then(s => {
      if (!mounted) return;
      if (!s) {
        alert('Смена не найдена');
        navigate('/');
        return;
      }
      if (s.status === 'Закрыта') {
        alert('Смена уже закрыта');
        navigate(`/shift/${id}`);
        return;
      }
      setShift(s);
      setPhotoIds(s.photoIds || []);
      setLoading(false);
    });
    store.getOperationsByShift(id).then(async ops => {
      if (!mounted) return;
      const refs = await store.getReferences();
      const cashFormId = refs.paymentForms?.find(p => p.name === 'Наличные')?.id;
      const expTotal = ops.filter(o => o.type === 'expense').filter(o => o.paymentFormId === cashFormId).reduce((sum, o) => sum + o.amount, 0);
      const incTotal = ops.filter(o => o.type === 'income').filter(o => o.paymentFormId === cashFormId).reduce((sum, o) => sum + o.amount, 0);
      setOpsExpense(expTotal);
      setOpsIncome(incTotal);
    });
    return () => { mounted = false; };
  }, [id, navigate]);

  const compressImage = (file) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxWidth = 1000;
        const scale = Math.min(1, maxWidth / img.width);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.75));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });

  const handleAddPhotos = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setPhotoBusy(true);
    const ids = [...photoIds];
    for (const file of files) {
      const dataUrl = await compressImage(file);
      const photo = await store.addPhoto(dataUrl);
      ids.push(photo.id);
    }
    setPhotoIds(ids);
    await store.updateShiftPhotos(id, ids);
    setPhotoBusy(false);
    e.target.value = '';
  };

  const handleRemovePhoto = async (photoId) => {
    const ids = photoIds.filter(p => p !== photoId);
    await store.deletePhoto(photoId);
    setPhotoIds(ids);
    await store.updateShiftPhotos(id, ids);
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'var(--text-secondary)' }}>
        Загрузка...
      </div>
    );
  }

  if (!shift) return null;

  const calculated = Number(shift.startBalance) + Number(cash || 0) + opsIncome - opsExpense;
  const revenueMatch = Number(revenue || 0) === (Number(cash || 0) + Number(cashless || 0));

  const handleCalc = () => {
    const nRev = Number(revenue);
    const nCash = toNum(cash);
    const nCashless = toNum(cashless);
    if (revenue !== '' && cash !== '') setCashless(String(nRev - nCash));
    else if (revenue !== '' && cashless !== '') setCash(String(nRev - nCashless));
    else alert('Заполните выручку и одно из полей (наличные или безналичные)');
  };

  const handleClose = async () => {
    if (!revenueMatch) {
      if (!confirm('Выручка не равна сумме наличных и безнала. Продолжить?')) return;
    }
    const result = await store.closeShift(id, { revenue, cash, cashless, deposit: opsIncome, expense: opsExpense, comment }, user.id);
    if (!result) {
      alert('Смена уже закрыта');
    }
    navigate(`/shift/${id}`);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}>
          <ArrowLeft size={24} />
        </button>
        <h1 style={{ fontSize: 22 }}>Закрытие смены #{shift.id.slice(-4)}</h1>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-title">Начальный остаток</div>
        <div className="card-value">{shift.startBalance.toLocaleString('ru-RU')} ₽</div>
      </div>

      <div className="form-group"><label className="form-label">Выручка, ₽</label><input type="tel" inputMode="decimal" pattern="[0-9.,]*" className="form-input" value={revenue} onChange={e => setRevenue(e.target.value)} placeholder="0" /></div>
      <div className="form-group"><label className="form-label">Наличные, ₽</label><input type="tel" inputMode="decimal" pattern="[0-9.,]*" className="form-input" value={cash} onChange={e => setCash(e.target.value)} placeholder="0" /></div>
      <div className="form-group"><label className="form-label">Безналичные (эквайринг), ₽</label><input type="tel" inputMode="decimal" pattern="[0-9.,]*" className="form-input" value={cashless} onChange={e => setCashless(e.target.value)} placeholder="0" /><p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 4 }}>Не участвует в остатке кассы</p></div>

      <button className="btn btn-secondary" onClick={handleCalc} style={{ marginBottom: 16 }}><Calculator size={18} /> Рассчитать</button>

      <div className="form-group">
        <label className="form-label">Приход (наличные операции), ₽</label>
        <div className="form-input" style={{ background: 'var(--surface)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>+{opsIncome.toLocaleString('ru-RU')} ₽</span>
          <span style={{ fontSize: 12 }}>по операциям</span>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Расход (наличные операции), ₽</label>
        <div className="form-input" style={{ background: 'var(--surface)', color: 'var(--danger)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>-{opsExpense.toLocaleString('ru-RU')} ₽</span>
          <span style={{ fontSize: 12 }}>по операциям</span>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-title">Расчетный остаток</div>
        <div className="card-value">{calculated.toLocaleString('ru-RU')} ₽</div>
        <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 4 }}>
          {shift.startBalance.toLocaleString('ru-RU')} + {Number(cash || 0).toLocaleString('ru-RU')} + {opsIncome.toLocaleString('ru-RU')} − {opsExpense.toLocaleString('ru-RU')}
        </p>
        {!revenueMatch && Number(revenue) > 0 && (<div style={{ color: 'var(--warning)', fontSize: 13, marginTop: 8, display: 'flex', alignItems: 'center', gap: 6 }}><AlertCircle size={14} /> Выручка ≠ Наличные + Безнал</div>)}
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-title">Фото смены (Z-отчёт и др.)</div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
          <label className="btn btn-secondary" style={{ flex: 1, padding: 12 }}>
            <Camera size={16} /> Камера
            <input type="file" accept="image/*" capture="environment" onChange={handleAddPhotos} style={{ display: 'none' }} />
          </label>
          <label className="btn btn-secondary" style={{ flex: 1, padding: 12 }}>
            <ImagePlus size={16} /> Галерея
            <input type="file" accept="image/*" multiple onChange={handleAddPhotos} style={{ display: 'none' }} />
          </label>
        </div>
        {photoBusy && <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>Сжатие...</p>}
        {photoIds.length > 0 && (
          <div className="photo-grid">
            {photoIds.map(pid => (
              <div key={pid} style={{ position: 'relative' }}>
                <PhotoThumb photoId={pid} />
                <button onClick={() => handleRemovePhoto(pid)} style={{ position: 'absolute', top: 4, right: 4, background: 'var(--danger)', border: 'none', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="form-group"><label className="form-label">Комментарий</label><input type="text" className="form-input" value={comment} onChange={e => setComment(e.target.value)} /></div>

      <button className="btn btn-success" onClick={handleClose} style={{ marginBottom: 40 }}><Lock size={18} /> Подтвердить закрытие</button>
    </div>
  );
}
```

---

### src/pages/Departments.jsx

```jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { store } from '../store';
import { Plus, Trash2, Edit3, Check, X, Link2, Users, Download } from 'lucide-react';
import { APPSHEET_SEED } from '../appsheetSeed';

const REF_CONFIG = [
  { key: 'expenseTypes', label: 'Статьи расходов' },
  { key: 'writeOffTypes', label: 'Статьи списания' },
  { key: 'incomeSources', label: 'Источники поступлений' },
  { key: 'counterparties', label: 'Контрагенты' },
  { key: 'employees', label: 'Сотрудники' },
  { key: 'contractors', label: 'Подрядчики' },
  { key: 'paymentForms', label: 'Формы оплаты' },
  { key: 'shiftTypes', label: 'Типы смен' },
];

const ROLE_OPTIONS = [
  { key: 'seller', label: 'Сотрудник' },
  { key: 'manager', label: 'Управляющий' },
  { key: 'owner', label: 'Руководитель' },
];

const LINK_OPTIONS = [
  { key: '', label: 'Нет связи' },
  { key: 'counterparties', label: 'Контрагенты' },
  { key: 'employees', label: 'Сотрудники' },
  { key: 'contractors', label: 'Подрядчики' },
];

const BUILTIN_KEYS = ['expenseTypes', 'writeOffTypes', 'incomeSources', 'counterparties', 'employees', 'contractors', 'paymentForms', 'shiftTypes'];

export default function Departments({ user }) {
  const navigate = useNavigate();
  const [refs, setRefs] = useState({});
  const [refType, setRefType] = useState('expenseTypes');

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editRole, setEditRole] = useState('seller');
  const [editPin, setEditPin] = useState('');
  const [editBaseSalary, setEditBaseSalary] = useState('');
  const [editRevenuePercent, setEditRevenuePercent] = useState('');
  const [editLinked, setEditLinked] = useState('');
  const [editShiftTypes, setEditShiftTypes] = useState([]);

  const [showNewType, setShowNewType] = useState(false);
  const [newTypeName, setNewTypeName] = useState('');
  const [editingTypeKey, setEditingTypeKey] = useState(null);
  const [editTypeName, setEditTypeName] = useState('');

  const [showAddFromList, setShowAddFromList] = useState(false);
  const [addFromListSource, setAddFromListSource] = useState('employees');
  const [addFromListId, setAddFromListId] = useState('');

  const [showImportPreview, setShowImportPreview] = useState(false);
  const [importSummary, setImportSummary] = useState(null);

  useEffect(() => { load(); }, []);

  const load = async () => {
    setRefs(await store.getReferences());
  };

  const save = async (updated) => {
    await store.saveReferences(updated);
    if (updated.employees) await store.syncEmployees(updated.employees);
    setRefs(updated);
  };

  const addType = () => {
    if (!newTypeName.trim()) return;
    const key = 'ref_' + Date.now();
    const updated = { ...refs };
    updated[key] = [];
    if (!updated.refMeta) updated.refMeta = {};
    updated.refMeta[key] = { name: newTypeName.trim() };
    save(updated);
    setNewTypeName('');
    setShowNewType(false);
    setRefType(key);
  };

  const startEditType = (key) => {
    setEditingTypeKey(key);
    setEditTypeName(refs.refMeta?.[key]?.name || key);
  };

  const saveEditType = () => {
    if (!editTypeName.trim()) return;
    const updated = { ...refs };
    if (!updated.refMeta) updated.refMeta = {};
    updated.refMeta[editingTypeKey] = { name: editTypeName.trim() };
    save(updated);
    setEditingTypeKey(null);
    setEditTypeName('');
  };

  const deleteType = () => {
    if (!confirm('Удалить справочник и все его записи?')) return;
    const updated = { ...refs };
    delete updated[refType];
    if (updated.refMeta) delete updated.refMeta[refType];
    save(updated);
    setRefType('expenseTypes');
  };

  const startCreate = () => {
    setIsEditing(true);
    setEditId(null);
    setEditName('');
    setEditRole('seller');
    setEditPin('');
    setEditLinked('');
    setEditBaseSalary('');
    setEditRevenuePercent('');
    setEditShiftTypes([]);
  };

  const startEdit = (item) => {
    setIsEditing(true);
    setEditId(item.id);
    setEditName(item.name);
    setEditRole(item.role || 'seller');
    setEditPin(item.pin || '');
    setEditLinked(item.linkedRef || '');
    setEditBaseSalary(item.baseSalary != null ? String(item.baseSalary) : '');
    setEditRevenuePercent(item.revenuePercent != null ? String(item.revenuePercent) : '');
    setEditShiftTypes(item.shiftTypes || []);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditId(null);
    setEditName('');
    setEditPin('');
    setEditLinked('');
    setEditBaseSalary('');
    setEditRevenuePercent('');
    setEditShiftTypes([]);
  };

  const isPinTaken = (pin, excludeId) => {
    return (refs.employees || []).some(e => e.active && e.pin === pin && e.id !== excludeId);
  };

  const saveItem = () => {
    if (!editName.trim()) return alert('Введите название');
    if (refType === 'employees' && editPin && !/^\d{4}$/.test(editPin)) {
      return alert('PIN-код должен содержать ровно 4 цифры');
    }
    if (refType === 'employees' && isPinTaken(editPin, editId)) {
      return alert('Этот PIN уже используется другим активным сотрудником. Выберите другой.');
    }
    const updated = { ...refs };
    if (editId) {
      updated[refType] = updated[refType].map(i => {
        if (i.id !== editId) return i;
        const upd = { ...i, name: editName.trim() };
        if (refType === 'employees') { upd.role = editRole; upd.pin = editPin; upd.shiftTypes = editShiftTypes; }
        if (refType === 'expenseTypes') {
          if (editLinked) upd.linkedRef = editLinked;
          else delete upd.linkedRef;
        }
        if (refType === 'shiftTypes') {
          upd.baseSalary = editBaseSalary === '' ? 0 : Number(editBaseSalary);
          upd.revenuePercent = editRevenuePercent === '' ? 0 : Number(editRevenuePercent);
        }
        return upd;
      });
    } else {
      const list = [...(updated[refType] || [])];
      const item = { id: 'ref_' + Date.now(), name: editName.trim(), active: true };
      if (refType === 'employees') { item.role = editRole; item.pin = editPin; item.shiftTypes = editShiftTypes; }
      if (refType === 'expenseTypes' && editLinked) item.linkedRef = editLinked;
      if (refType === 'shiftTypes') {
        item.baseSalary = editBaseSalary === '' ? 0 : Number(editBaseSalary);
        item.revenuePercent = editRevenuePercent === '' ? 0 : Number(editRevenuePercent);
      }
      list.push(item);
      updated[refType] = list;
    }
    save(updated);
    cancelEdit();
  };

  const deleteItem = (id) => {
    if (!confirm('Удалить запись?')) return;
    const updated = { ...refs };
    updated[refType] = updated[refType].filter(i => i.id !== id);
    save(updated);
  };

  const toggleActive = (id) => {
    const updated = { ...refs };
    updated[refType] = updated[refType].map(i => i.id === id ? { ...i, active: !i.active } : i);
    save(updated);
  };

  const getImportCandidates = () => {
    const source = refs[addFromListSource] || [];
    const already = new Set(
      (refs[refType] || [])
        .filter(s => s.linkedRef === addFromListSource)
        .map(s => s.linkedId)
    );
    return source.filter(i => i.active && !already.has(i.id));
  };

  const handleAddFromList = () => {
    if (!addFromListId) return alert('Выберите запись');
    const item = (refs[addFromListSource] || []).find(i => i.id === addFromListId);
    if (!item) return;
    const updated = { ...refs };
    const list = [...(updated[refType] || [])];
    list.push({
      id: 'ref_' + Date.now(),
      name: item.name,
      active: true,
      linkedRef: addFromListSource,
      linkedId: item.id,
    });
    updated[refType] = list;
    save(updated);
    setShowAddFromList(false);
    setAddFromListId('');
  };

  const buildImportSummary = () => {
    const existingNames = (key) => new Set((refs[key] || []).map(i => i.name.trim().toLowerCase()));

    const empExisting = existingNames('employees');
    const newEmployees = APPSHEET_SEED.employees.filter(e => !empExisting.has(e.name.trim().toLowerCase()));

    const contrExisting = existingNames('contractors');
    const newContractors = APPSHEET_SEED.contractors.filter(name => !contrExisting.has(name.trim().toLowerCase()));

    const cpExisting = existingNames('counterparties');
    const newCounterparties = APPSHEET_SEED.counterparties.filter(name => !cpExisting.has(name.trim().toLowerCase()));

    const etExisting = existingNames('expenseTypes');
    const newExpenseTypes = APPSHEET_SEED.expenseTypes.filter(t => !etExisting.has(t.name.trim().toLowerCase()));

    return {
      newEmployees,
      newContractors,
      newCounterparties,
      newExpenseTypes,
      skippedEmployees: APPSHEET_SEED.employees.length - newEmployees.length,
      skippedContractors: APPSHEET_SEED.contractors.length - newContractors.length,
      skippedCounterparties: APPSHEET_SEED.counterparties.length - newCounterparties.length,
      skippedExpenseTypes: APPSHEET_SEED.expenseTypes.length - newExpenseTypes.length,
    };
  };

  const openImportPreview = () => {
    setImportSummary(buildImportSummary());
    setShowImportPreview(true);
  };

  const runImport = () => {
    if (!importSummary) return;
    const updated = { ...refs };

    const empList = [...(updated.employees || [])];
    importSummary.newEmployees.forEach(e => {
      empList.push({ id: 'ref_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7), name: e.name, active: true, role: e.role, pin: '', email: e.email || '' });
    });
    updated.employees = empList;

    const contrList = [...(updated.contractors || [])];
    importSummary.newContractors.forEach(name => {
      contrList.push({ id: 'ref_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7), name, active: true });
    });
    updated.contractors = contrList;

    const cpList = [...(updated.counterparties || [])];
    importSummary.newCounterparties.forEach(name => {
      cpList.push({ id: 'ref_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7), name, active: true });
    });
    updated.counterparties = cpList;

    const etList = [...(updated.expenseTypes || [])];
    importSummary.newExpenseTypes.forEach(t => {
      const item = { id: 'ref_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7), name: t.name, active: true };
      if (t.linkedRef) item.linkedRef = t.linkedRef;
      etList.push(item);
    });
    updated.expenseTypes = etList;

    save(updated);
    setShowImportPreview(false);
    setImportSummary(null);
    alert('Импорт завершён');
  };

  const currentList = refs[refType] || [];
  const isEmployees = refType === 'employees';
  const isExpenseTypes = refType === 'expenseTypes';
  const isIncomeSources = refType === 'incomeSources';
  const isWriteOffTypes = refType === 'writeOffTypes';
  const isShiftTypes = refType === 'shiftTypes';
  const isCustom = !BUILTIN_KEYS.includes(refType);

  const customKeys = Object.keys(refs).filter(k => !BUILTIN_KEYS.includes(k) && k !== 'refMeta');

  if (user.role !== 'owner' && user.role !== 'manager') {
    return <div className="empty-state">Доступ только для владельца или управляющего</div>;
  }

  return (
    <div>
      {user.role === 'owner' && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12, paddingTop: 'env(safe-area-inset-top)' }}>
          <button onClick={openImportPreview} className="btn btn-secondary" style={{ width: 'auto', padding: '8px 12px', fontSize: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
            <Download size={14} /> Импорт AppSheet
          </button>
        </div>
      )}

      {showImportPreview && importSummary && (
        <div className="card" style={{ marginBottom: 16, background: 'var(--surface-light)' }}>
          <h3 style={{ marginBottom: 10, fontSize: 15 }}>Импорт справочников из AppSheet</h3>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 8 }}>
            Сотрудники: +{importSummary.newEmployees.length} новых {importSummary.skippedEmployees > 0 ? '(' + importSummary.skippedEmployees + ' уже есть)' : ''}<br/>
            Подрядчики: +{importSummary.newContractors.length} новых {importSummary.skippedContractors > 0 ? '(' + importSummary.skippedContractors + ' уже есть)' : ''}<br/>
            Контрагенты: +{importSummary.newCounterparties.length} новых {importSummary.skippedCounterparties > 0 ? '(' + importSummary.skippedCounterparties + ' уже есть)' : ''}<br/>
            Статьи расходов: +{importSummary.newExpenseTypes.length} новых {importSummary.skippedExpenseTypes > 0 ? '(' + importSummary.skippedExpenseTypes + ' уже есть)' : ''}
          </p>
          <p style={{ fontSize: 11, color: 'var(--text-secondary)', marginBottom: 12 }}>
            История смен и операций не импортируется — только справочники. Сотрудникам нужно будет вручную задать PIN-коды.
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-success" onClick={runImport} style={{ flex: 1 }}>Импортировать</button>
            <button className="btn btn-secondary" onClick={() => { setShowImportPreview(false); setImportSummary(null); }} style={{ flex: 1 }}>Отмена</button>
          </div>
        </div>
      )}

      <div className="form-group">
        <label className="form-label">Справочник</label>
        <div style={{ display: 'flex', gap: 8 }}>
          <select className="form-select" value={refType} onChange={e => { setRefType(e.target.value); cancelEdit(); setShowAddFromList(false); }} style={{ flex: 1 }}>
            {REF_CONFIG.map(t => <option key={t.key} value={t.key}>{t.label}</option>)}
            {customKeys.map(k => (
              <option key={k} value={k}>{refs.refMeta?.[k]?.name || k}</option>
            ))}
          </select>
          {isCustom && (
            <button onClick={() => startEditType(refType)} style={{ background: 'var(--surface-light)', border: 'none', borderRadius: 8, padding: '10px 12px', color: 'var(--text)' }}><Edit3 size={16} /></button>
          )}
          {isCustom && (
            <button onClick={deleteType} style={{ background: 'var(--danger)', border: 'none', borderRadius: 8, padding: '10px 12px', color: '#fff' }}><Trash2 size={16} /></button>
          )}
          <button className="btn btn-primary" onClick={() => setShowNewType(true)} style={{ width: 'auto', padding: '10px 14px' }}><Plus size={18} /></button>
        </div>
      </div>

      {editingTypeKey && (
        <div className="card" style={{ marginBottom: 16, background: 'var(--surface-light)' }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              type="text"
              className="form-input"
              value={editTypeName}
              onChange={e => setEditTypeName(e.target.value)}
              placeholder="Название справочника..."
              style={{ flex: 1 }}
              onKeyDown={e => e.key === 'Enter' && saveEditType()}
            />
            <button className="btn btn-success" onClick={saveEditType} style={{ width: 'auto', padding: '14px 16px' }}><Check size={18} /></button>
            <button className="btn btn-secondary" onClick={() => { setEditingTypeKey(null); setEditTypeName(''); }} style={{ width: 'auto', padding: '14px 16px' }}><X size={18} /></button>
          </div>
        </div>
      )}

      {showNewType && (
        <div className="card" style={{ marginBottom: 16, background: 'var(--surface-light)' }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              type="text"
              className="form-input"
              value={newTypeName}
              onChange={e => setNewTypeName(e.target.value)}
              placeholder="Название справочника..."
              style={{ flex: 1 }}
              onKeyDown={e => e.key === 'Enter' && addType()}
            />
            <button className="btn btn-success" onClick={addType} style={{ width: 'auto', padding: '14px 16px' }}><Check size={18} /></button>
            <button className="btn btn-secondary" onClick={() => { setShowNewType(false); setNewTypeName(''); }} style={{ width: 'auto', padding: '14px 16px' }}><X size={18} /></button>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <button className="btn btn-primary" onClick={startCreate} style={{ flex: 1, padding: '14px 20px' }}>
          <Plus size={18} style={{ verticalAlign: 'middle', marginRight: 8 }} /> Добавить строчку
        </button>
        {(isIncomeSources || isWriteOffTypes) && (
          <button className="btn btn-secondary" onClick={() => setShowAddFromList(!showAddFromList)} style={{ flex: 1, padding: '14px 20px' }}>
            <Users size={18} style={{ verticalAlign: 'middle', marginRight: 8 }} /> Из справочника
          </button>
        )}
      </div>

      {(showAddFromList && (isIncomeSources || isWriteOffTypes)) && (
        <div className="card" style={{ marginBottom: 16, background: 'var(--surface-light)' }}>
          <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 12 }}>
            Добавит запись, привязанную к выбранной записи из справочника — это позволит в будущем свести дебет-кредит.
          </p>
          <div className="form-group" style={{ marginBottom: 10 }}>
            <label className="form-label">Список</label>
            <select className="form-select" value={addFromListSource} onChange={e => { setAddFromListSource(e.target.value); setAddFromListId(''); }}>
              <option value="employees">Сотрудники</option>
              <option value="contractors">Подрядчики</option>
              <option value="counterparties">Контрагенты</option>
            </select>
          </div>
          <div className="form-group" style={{ marginBottom: 10 }}>
            <label className="form-label">Запись</label>
            <select className="form-select" value={addFromListId} onChange={e => setAddFromListId(e.target.value)}>
              <option value="">Выберите...</option>
              {getImportCandidates().map(i => <option key={i.id} value={i.id}>{i.name}</option>)}
            </select>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-success" onClick={handleAddFromList} style={{ flex: 1 }}>Добавить</button>
            <button className="btn btn-secondary" onClick={() => { setShowAddFromList(false); setAddFromListId(''); }} style={{ flex: 1 }}>Отмена</button>
          </div>
        </div>
      )}

      {isEditing && (
        <div className="card" style={{ marginBottom: 16, background: 'var(--surface-light)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <input
              type="text"
              className="form-input"
              value={editName}
              onChange={e => setEditName(e.target.value)}
              placeholder={isEmployees ? 'ФИО сотрудника...' : 'Название...'}
              onKeyDown={e => e.key === 'Enter' && saveItem()}
            />
            {isEmployees && (
              <>
                <select className="form-select" value={editRole} onChange={e => setEditRole(e.target.value)}>
                  {ROLE_OPTIONS.map(r => <option key={r.key} value={r.key}>{r.label}</option>)}
                </select>
                <input
                  type="text"
                  className="form-input"
                  value={editPin}
                  onChange={e => setEditPin(e.target.value)}
                  placeholder="PIN-код (4 цифры)"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={4}
                />
                <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4 }}>Доступные типы смен:</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {(refs.shiftTypes || []).filter(t => t.active).map(t => (
                    <label key={t.id} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, cursor: 'pointer', background: 'var(--surface)', padding: '6px 10px', borderRadius: 8 }}>
                      <input
                        type="checkbox"
                        checked={editShiftTypes.includes(t.id)}
                        onChange={e => {
                          if (e.target.checked) setEditShiftTypes([...editShiftTypes, t.id]);
                          else setEditShiftTypes(editShiftTypes.filter(id => id !== t.id));
                        }}
                      />
                      {t.name}
                    </label>
                  ))}
                </div>
              </>
            )}
            {isExpenseTypes && (
              <select className="form-select" value={editLinked} onChange={e => setEditLinked(e.target.value)}>
                {LINK_OPTIONS.map(l => <option key={l.key} value={l.key}>{l.label}</option>)}
              </select>
            )}
            {isShiftTypes && (
              <>
                <div style={{ display: 'flex', gap: 8 }}>
                  <div style={{ flex: 1 }}>
                    <label className="form-label" style={{ marginBottom: 4 }}>Оклад за смену, ₽</label>
                    <input type="tel" inputMode="decimal" pattern="[0-9.,]*" className="form-input" value={editBaseSalary} onChange={e => setEditBaseSalary(e.target.value)} placeholder="0" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label className="form-label" style={{ marginBottom: 4 }}>% от выручки</label>
                    <input type="tel" inputMode="decimal" pattern="[0-9.,]*" className="form-input" value={editRevenuePercent} onChange={e => setEditRevenuePercent(e.target.value)} placeholder="0" />
                  </div>
                </div>
              </>
            )}
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-success" onClick={saveItem} style={{ flex: 1 }}><Check size={16} /> Сохранить</button>
              <button className="btn btn-secondary" onClick={cancelEdit} style={{ flex: 1 }}><X size={16} /> Отмена</button>
            </div>
          </div>
        </div>
      )}

      {currentList.map(item => (
        <div key={item.id} className="list-item">
          <div className="list-item-info" style={{ flex: 1 }}>
            <h3>{item.name}</h3>
            {isEmployees && item.role && (
              <p style={{ fontSize: 11, color: 'var(--text-secondary)' }}>
                {ROLE_OPTIONS.find(r => r.key === item.role)?.label || item.role}
                {item.pin && <span style={{ marginLeft: 8 }}>• PIN: {item.pin}</span>}
                {item.shiftTypes?.length > 0 && (
                  <span style={{ marginLeft: 8 }}>• Смены: {item.shiftTypes.map(stid => refs.shiftTypes?.find(t => t.id === stid)?.name).filter(Boolean).join(', ')}</span>
                )}
              </p>
            )}
            {isExpenseTypes && item.linkedRef && (
              <p style={{ fontSize: 11, color: 'var(--text-secondary)' }}>
                <Link2 size={10} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                {LINK_OPTIONS.find(l => l.key === item.linkedRef)?.label || item.linkedRef}
              </p>
            )}
            {isWriteOffTypes && item.linkedRef && (
              <p style={{ fontSize: 11, color: 'var(--text-secondary)' }}>
                <Link2 size={10} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                {LINK_OPTIONS.find(l => l.key === item.linkedRef)?.label || item.linkedRef}
              </p>
            )}
            {isIncomeSources && item.linkedRef && (
              <p style={{ fontSize: 11, color: 'var(--text-secondary)' }}>
                <Link2 size={10} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                {LINK_OPTIONS.find(l => l.key === item.linkedRef)?.label || item.linkedRef}
              </p>
            )}
            {isShiftTypes && (
              <p style={{ fontSize: 11, color: 'var(--text-secondary)' }}>
                Оклад: {(item.baseSalary || 0).toLocaleString('ru-RU')} ₽
                {item.revenuePercent ? <span style={{ marginLeft: 8 }}>• % от выручки: {item.revenuePercent}%</span> : ''}
              </p>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button onClick={() => toggleActive(item.id)} className="btn btn-secondary" style={{ width: 'auto', padding: '6px 10px', fontSize: 11 }}>
              {item.active ? 'Активна' : 'Скрыта'}
            </button>
            <button onClick={() => startEdit(item)} style={{ background: 'var(--surface-light)', border: 'none', borderRadius: 6, padding: 8, color: 'var(--text)' }}><Edit3 size={14} /></button>
            <button onClick={() => deleteItem(item.id)} style={{ background: 'var(--danger)', border: 'none', borderRadius: 6, padding: 8, color: '#fff' }}><Trash2 size={14} /></button>
          </div>
        </div>
      ))}
    </div>
  );
}
```

---

### src/pages/EditOperation.jsx

```jsx
const toLocalInput = (d = new Date()) => {
  const offset = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - offset).toISOString().slice(0, 16);
};

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { store, toNum } from '../store';
import { ArrowLeft, Save } from 'lucide-react';
import PhotoCapture from '../components/PhotoCapture';

export default function EditOperation({ user }) {
  const { id, opId } = useParams();
  const navigate = useNavigate();
  const [op, setOp] = useState(null);
  const [refs, setRefs] = useState(null);
  const [amount, setAmount] = useState('');
  const [expenseTypeId, setExpenseTypeId] = useState('');
  const [writeOffTypeId, setWriteOffTypeId] = useState('');
  const [counterpartyId, setCounterpartyId] = useState('');
  const [paymentFormId, setPaymentFormId] = useState('');
  const [relatedId, setRelatedId] = useState('');
  const [sourceId, setSourceId] = useState('');
  const [comment, setComment] = useState('');
  const [photoIds, setPhotoIds] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    store.getReferences().then(r => setRefs(r));
    store.getOperation(opId).then(o => {
      if (!o) return navigate(-1);
      if (o.shiftId && o.shiftId !== id) return navigate(-1);
      setOp(o);
      setAmount(String(o.amount));
      setExpenseTypeId(o.expenseTypeId || '');
      setWriteOffTypeId(o.writeOffTypeId || '');
      setCounterpartyId(o.counterpartyId || '');
      setPaymentFormId(o.paymentFormId || '');
      setRelatedId(o.contractorId || o.counterpartyId || o.employeeId || '');
      setSourceId(o.sourceId || '');
      setComment(o.comment || '');
      setPhotoIds(o.photoIds || []);
      setDate(o.date ? toLocalInput(new Date(o.date)) : '');
    });
  }, [opId, id, navigate]);

  const handleSave = async () => {
    const n = toNum(amount);
    if (!Number.isFinite(n) || n <= 0) return alert('Введите корректную сумму');

    if (op.category === 'goods') {
      if (!date) return alert('Укажите дату');
      if (op.type === 'expense' && !writeOffTypeId) return alert('Выберите статью списания');
      if (type === 'income' && !counterpartyId) return alert('Выберите контрагента');

      const payload = {
        amount: n,
        date: new Date(date).toISOString(),
        writeOffTypeId: op.type === 'expense' ? writeOffTypeId : null,
        counterpartyId,
        comment,
        photoIds,
      };
      await store.updateOperation(opId, payload, user.id);
      navigate(id ? `/shift/${id}/operations` : '/operations');
      return;
    }

    if (op.type === 'expense') {
      if (!expenseTypeId) return alert('Выберите статью расхода');
      const et = refs.expenseTypes?.find(t => t.id === expenseTypeId);
      if (et?.linkedRef && !relatedId) {
        return alert('Заполните связанный справочник для выбранной статьи расхода');
      }
    }
    if (op.type === 'income' && !sourceId) {
      return alert('Выберите источник поступления');
    }

    const payload = {
      amount: n,
      expenseTypeId: op.type === 'expense' ? expenseTypeId : null,
      paymentFormId,
      comment,
      photoIds,
    };
    if (op.type === 'expense') {
      payload.sourceId = null;
      if (linkedRef === 'employees') payload.employeeId = relatedId;
      if (linkedRef === 'contractors') payload.contractorId = relatedId;
      if (linkedRef === 'counterparties') payload.counterpartyId = relatedId;
    }
    if (op.type === 'income') {
      payload.sourceId = sourceId;
      payload.expenseTypeId = null;
      payload.counterpartyId = null;
      payload.contractorId = null;
      payload.employeeId = null;
    }
    await store.updateOperation(opId, payload, user.id);
    navigate(id ? `/shift/${id}/operations` : '/operations');
  };

  if (!op || !refs) return <div className="empty-state">Загрузка...</div>;

  const selectedExpenseType = refs.expenseTypes?.find(t => t.id === expenseTypeId);
  const linkedRef = selectedExpenseType?.linkedRef;
  const filterRoles = selectedExpenseType?.filterRoles;

  const getLinkedItems = () => {
    if (!linkedRef || !refs) return [];
    let items = refs[linkedRef]?.filter(t => t.active) || [];
    if (filterRoles && filterRoles.length > 0) {
      items = items.filter(i => filterRoles.includes(i.role));
    }
    if (linkedRef === 'employees' && selectedExpenseType?.name?.toLowerCase().includes('заработная')) {
      items = items.filter(i => i.role === 'seller' || i.role === 'manager');
    }
    return items;
  };

  const linkedItems = getLinkedItems();
  const showLinked = op.type === 'expense' && linkedRef && linkedItems.length > 0;
  const linkedLabel = linkedRef === 'employees' ? 'Сотрудник' : linkedRef === 'contractors' ? 'Подрядчик' : linkedRef === 'counterparties' ? 'Контрагент' : 'Связанный';

  const isGoods = op.category === 'goods';

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>Изменение операции</h1>
      </div>

      {isGoods && (
        <div className="form-group">
          <label className="form-label">Категория</label>
          <div className="form-input" style={{ background: 'var(--surface)', color: 'var(--success)' }}>Товарная операция</div>
        </div>
      )}

      <div className="form-group">
        <label className="form-label">Тип</label>
        <div className="form-input" style={{ background: 'var(--surface)', color: 'var(--text-secondary)' }}>
          {op.type === 'income' ? 'Приход' : 'Расход'}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Сумма, ₽</label>
        <input type="tel" inputMode="decimal" pattern="[0-9.,]*" className="form-input" value={amount} onChange={e => setAmount(e.target.value)} />
      </div>

      {isGoods ? (
        <>
          <div className="form-group">
            <label className="form-label">Дата и время</label>
            <input type="datetime-local" className="form-input" value={date} onChange={e => setDate(e.target.value)} />
          </div>

          {op.type === 'expense' && (
            <div className="form-group">
              <label className="form-label">Статья списания</label>
              <select className="form-select" value={writeOffTypeId} onChange={e => setWriteOffTypeId(e.target.value)}>
                <option value="">Выберите статью...</option>
                {refs.writeOffTypes?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
              </select>
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Контрагент</label>
            <select className="form-select" value={counterpartyId} onChange={e => setCounterpartyId(e.target.value)}>
              <option value="">Выберите контрагента...</option>
              {refs.counterparties?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
            </select>
          </div>
        </>
      ) : (
        <>
          {op.type === 'expense' && (
            <div className="form-group">
              <label className="form-label">Статья расхода</label>
              <select className="form-select" value={expenseTypeId} onChange={e => { setExpenseTypeId(e.target.value); setRelatedId(''); }}>
                <option value="">Выберите статью...</option>
                {refs.expenseTypes?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
              </select>
            </div>
          )}

          {showLinked && (
            <div className="form-group">
              <label className="form-label">{linkedLabel}</label>
              <select className="form-select" value={relatedId} onChange={e => setRelatedId(e.target.value)}>
                <option value="">Выберите {linkedLabel.toLowerCase()}...</option>
                {linkedItems.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
              </select>
            </div>
          )}

          {op.type === 'income' && (
            <div className="form-group">
              <label className="form-label">Источник поступления</label>
              <select className="form-select" value={sourceId} onChange={e => setSourceId(e.target.value)}>
                <option value="">Выберите источник...</option>
                {refs.incomeSources?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
              </select>
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Форма оплаты</label>
            <select className="form-select" value={paymentFormId} onChange={e => setPaymentFormId(e.target.value)}>
              <option value="">Выберите форму оплаты...</option>
              {refs.paymentForms?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
            </select>
          </div>
        </>
      )}

      <div className="form-group">
        <label className="form-label">Комментарий</label>
        <input type="text" className="form-input" value={comment} onChange={e => setComment(e.target.value)} />
      </div>

      <PhotoCapture photoIds={photoIds} onChange={setPhotoIds} />

      <button className="btn btn-success" onClick={handleSave} style={{ marginTop: 16, marginBottom: 40 }}><Save size={18} /> Сохранить изменения</button>
    </div>
  );
}
```

---

### src/pages/EditShift.jsx

```jsx
const toLocalInput = (d = new Date()) => {
  const offset = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - offset).toISOString().slice(0, 16);
};

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { store, toNum } from '../store';
import { ArrowLeft, Save, AlertCircle, Calculator } from 'lucide-react';

export default function EditShift({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shift, setShift] = useState(null);
  const [opsExpense, setOpsExpense] = useState(0);
  const [opsIncome, setOpsIncome] = useState(0);
  const [revenue, setRevenue] = useState('');
  const [cash, setCash] = useState('');
  const [cashless, setCashless] = useState('');
  const [comment, setComment] = useState('');
  const [openDate, setOpenDate] = useState('');
  const [closeDate, setCloseDate] = useState('');
  const [lastEdited, setLastEdited] = useState(null);

  useEffect(() => {
    store.getShift(id).then(async s => {
      if (!s || s.status !== 'Закрыта') return navigate('/');
      if (!store.canEditShift(s, user)) return navigate('/');
      const ops = await store.getOperationsByShift(id);
      const refs = await store.getReferences();
      const cashFormId = refs.paymentForms?.find(p => p.name === 'Наличные')?.id;
      const expTotal = ops.filter(o => o.type === 'expense').filter(o => o.paymentFormId === cashFormId).reduce((sum, o) => sum + o.amount, 0);
      const incTotal = ops.filter(o => o.type === 'income').filter(o => o.paymentFormId === cashFormId).reduce((sum, o) => sum + o.amount, 0);
      setShift(s);
      setOpsExpense(expTotal);
      setOpsIncome(incTotal);
      setRevenue(String(s.revenue || 0));
      setCash(String(s.cash || 0));
      setCashless(String(s.cashless || 0));
      setComment(s.comment || '');
      setOpenDate(s.openDate ? toLocalInput(new Date(s.openDate)) : '');
      setCloseDate(s.closeDate ? toLocalInput(new Date(s.closeDate)) : '');
    });
  }, [id, user, navigate]);

  if (!shift) return null;

  const calculated = Number(shift.startBalance) + Number(cash || 0) + opsIncome - opsExpense;
  const revenueMatch = Number(revenue || 0) === (Number(cash || 0) + Number(cashless || 0));

  const handleCashChange = (v) => {
    setCash(v);
    setLastEdited('cash');
  };

  const handleCashlessChange = (v) => {
    setCashless(v);
    setLastEdited('cashless');
  };

  const handleCalc = () => {
    const nRev = Number(revenue);
    if (revenue === '') {
      alert('Заполните выручку');
      return;
    }
    if (lastEdited === 'cashless') {
      if (cashless === '') { alert('Заполните безналичные'); return; }
      setCash(String(nRev - Number(cashless)));
    } else if (lastEdited === 'cash') {
      if (cash === '') { alert('Заполните наличные'); return; }
      setCashless(String(nRev - Number(cash)));
    } else if (cash !== '') {
      setCashless(String(nRev - Number(cash)));
    } else if (cashless !== '') {
      setCash(String(nRev - Number(cashless)));
    } else {
      alert('Заполните выручку и одно из полей (наличные или безналичные)');
    }
  };

  const handleSave = async () => {
    if (!revenueMatch && Number(revenue) > 0) {
      if (!confirm('Выручка не равна сумме наличных и безнала. Продолжить?')) return;
    }
    await store.updateShift(id, { revenue, cash, cashless, comment, openDate, closeDate }, user.id);
    navigate(`/shift/${id}`);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>Изменение смены #{shift.id.slice(-4)}</h1>
      </div>

      <div className="card" style={{ marginBottom: 16, background: 'rgba(255,152,0,0.1)', border: '1px solid var(--warning)' }}>
        <div style={{ fontSize: 13, color: 'var(--warning)' }}>
          Редактирование доступно до: {new Date(shift.editDeadline).toLocaleString('ru-RU')}
        </div>
      </div>

      <div className="form-group"><label className="form-label">Выручка, ₽</label><input type="tel" inputMode="decimal" className="form-input" value={revenue} onChange={e => setRevenue(e.target.value)} /></div>
      <div className="form-group"><label className="form-label">Наличные, ₽</label><input type="tel" inputMode="decimal" className="form-input" value={cash} onChange={e => handleCashChange(e.target.value)} /></div>
      <div className="form-group"><label className="form-label">Безналичные, ₽</label><input type="tel" inputMode="decimal" className="form-input" value={cashless} onChange={e => handleCashlessChange(e.target.value)} /></div>
      <button className="btn btn-secondary" onClick={handleCalc} style={{ marginBottom: 16 }}><Calculator size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} />Рассчитать</button>

      <div className="form-group">
        <label className="form-label">Приход (наличные операции), ₽</label>
        <div className="form-input" style={{ background: 'var(--surface)', color: 'var(--success)' }}>
          +{opsIncome.toLocaleString('ru-RU')} ₽ (по операциям)
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Расход (наличные операции), ₽</label>
        <div className="form-input" style={{ background: 'var(--surface)', color: 'var(--danger)' }}>
          -{opsExpense.toLocaleString('ru-RU')} ₽ (по операциям)
        </div>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-title">Расчетный остаток</div>
        <div className="card-value">{calculated.toLocaleString('ru-RU')} ₽</div>
        {!revenueMatch && Number(revenue) > 0 && (
          <div style={{ color: 'var(--warning)', fontSize: 13, marginTop: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
            <AlertCircle size={14} /> Выручка ≠ Наличные + Безнал
          </div>
        )}
      </div>

      <div className="form-group"><label className="form-label">Комментарий</label><input type="text" className="form-input" value={comment} onChange={e => setComment(e.target.value)} /></div>

      <div className="form-group">
        <label className="form-label">Дата и время открытия</label>
        <input type="datetime-local" className="form-input" value={openDate} onChange={e => setOpenDate(e.target.value)} />
      </div>

      <div className="form-group">
        <label className="form-label">Дата и время закрытия</label>
        <input type="datetime-local" className="form-input" value={closeDate} onChange={e => setCloseDate(e.target.value)} />
      </div>

      <button className="btn btn-success" onClick={handleSave} style={{ marginBottom: 40 }}><Save size={18} /> Сохранить изменения</button>
    </div>
  );
}
```

---

### src/pages/Home.jsx

```jsx
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { store, getShortWeekday } from '../store';
import { Plus, ArrowRight } from 'lucide-react';

function localDateStr(isoString) {
  if (!isoString) return '';
  const d = new Date(isoString);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export default function Home({ user }) {
  const navigate = useNavigate();
  const [shifts, setShifts] = useState([]);
  const [openShift, setOpenShift] = useState(null);
  const [refs, setRefs] = useState({});
  const [stats, setStats] = useState({ today: 0, week: 0 });
  const [newShiftType, setNewShiftType] = useState('');
  const [filterEmpId, setFilterEmpId] = useState('');

  useEffect(() => { loadData(); }, []);
  useEffect(() => { if (isManager) loadData(); }, [filterEmpId]);

  const loadData = async () => {
    const all = await store.getShifts();
    const r = await store.getReferences();
    setRefs(r);
    let visible = all;
    if (user.role === 'seller') {
      visible = all.filter(s => s.employeeIds?.includes(user.id));
    } else if (filterEmpId) {
      visible = all.filter(s => s.employeeIds?.includes(filterEmpId));
    }
    const sorted = visible.sort((a, b) => new Date(b.openDate) - new Date(a.openDate));
    setShifts(sorted);
    const open = sorted.find(s => s.status === 'Открыта');
    setOpenShift(open);

    if (user.role !== 'seller') {
      const now = new Date();
      const todayStr = localDateStr(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
      const weekStr = localDateStr(new Date(now.getTime() - 7 * 86400000));
      const closed = all.filter(s => s.status === 'Закрыта');
      setStats({
        today: closed.filter(s => localDateStr(s.closeDate) >= todayStr).reduce((sum, s) => sum + s.revenue, 0),
        week: closed.filter(s => localDateStr(s.closeDate) >= weekStr).reduce((sum, s) => sum + s.revenue, 0),
      });
    }
  };

  const getEmpName = (id) => refs.employees?.find(e => e.id === id)?.name || '—';
  const getEmpShiftTypeName = (shift, empId) => {
    const tid = shift.employeeShiftTypes?.[empId] ?? shift.shiftTypeId ?? null;
    return tid ? refs.shiftTypes?.find(t => t.id === tid)?.name : null;
  };

  const handleCreate = async () => {
    if (openShift) {
      navigate(`/shift/${openShift.id}`);
      return;
    }
    const shift = await store.createShift(user.id, newShiftType || null);
    if (!shift) {
      const os = await store.getOpenShift();
      await loadData();
      if (os) navigate(`/shift/${os.id}`);
      return;
    }
    navigate(`/shift/${shift.id}`);
  };

  const me = refs.employees?.find(e => e.id === user.id);
  const myShiftTypes = (refs.shiftTypes || []).filter(t =>
    t.active && (!me?.shiftTypes?.length || me.shiftTypes.includes(t.id))
  );

  const isManager = user.role === 'manager' || user.role === 'owner';

  return (
    <div>
      {isManager && (
        <div className="stats-grid" style={{ marginBottom: 16 }}>
          <div className="stat-card"><h3>Сегодня</h3><p>{stats.today.toLocaleString('ru-RU')} ₽</p></div>
          <div className="stat-card"><h3>Неделя</h3><p>{stats.week.toLocaleString('ru-RU')} ₽</p></div>
        </div>
      )}

      {openShift && (
        <div className="card" style={{ borderLeft: '4px solid var(--success)', cursor: 'pointer' }} onClick={() => navigate(`/shift/${openShift.id}`)}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <span className="badge badge-open">Открыта</span>
              <p style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 8 }}>{new Date(openShift.openDate).toLocaleString('ru-RU')}</p>
              <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {openShift.employeeIds?.map(eid => (
                  <span key={eid} style={{ background: 'var(--surface-light)', padding: '4px 10px', borderRadius: 12, fontSize: 12, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span>{getEmpName(eid)}</span>
                    {getEmpShiftTypeName(openShift, eid) && (
                      <span style={{ color: 'var(--text-secondary)', fontSize: 10 }}>{getEmpShiftTypeName(openShift, eid)}</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-secondary)' }}>#{openShift.shiftNumber || openShift.id.slice(-4)}</div>
              <ArrowRight size={24} color="var(--text-secondary)" style={{ marginTop: 8 }} />
            </div>
          </div>
          <div className="stats-grid" style={{ marginTop: 12, marginBottom: 0 }}>
            <div className="stat-card" style={{ padding: 12 }}><h3>Начало</h3><p>{openShift.startBalance.toLocaleString('ru-RU')} ₽</p></div>
            <div className="stat-card" style={{ padding: 12 }}><h3>Остаток</h3><p>{openShift.endBalance.toLocaleString('ru-RU')} ₽</p></div>
          </div>
        </div>
      )}

      {!openShift && (
        <div className="form-group">
          <label className="form-label">Ваш тип смены</label>
          <select className="form-select" value={newShiftType} onChange={e => setNewShiftType(e.target.value)}>
            <option value="">Не выбран</option>
            {myShiftTypes.map(t => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
        </div>
      )}

      <button className="btn btn-primary" onClick={handleCreate} style={{ marginBottom: 20 }}>
        <Plus size={20} /> {openShift ? 'Перейти к смене' : 'Открыть смену'}
      </button>

      {isManager && (
        <div className="form-group" style={{ marginBottom: 12 }}>
          <label className="form-label">Фильтр по сотруднику</label>
          <select className="form-select" value={filterEmpId} onChange={e => setFilterEmpId(e.target.value)}>
            <option value="">Все сотрудники</option>
            {refs.employees?.filter(e => e.active).map(e => (
              <option key={e.id} value={e.id}>{e.fullName || e.name}</option>
            ))}
          </select>
        </div>
      )}

      <h2 style={{ fontSize: 16, marginBottom: 12, color: 'var(--text-secondary)' }}>История</h2>
      {shifts.filter(s => s.status === 'Закрыта').length === 0 && <div className="empty-state">Нет закрытых смен</div>}
      {shifts.filter(s => s.status === 'Закрыта').slice(0, 10).map(shift => (
        <div key={shift.id} className="card" onClick={() => navigate(`/shift/${shift.id}`)} style={{ cursor: 'pointer' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <span className="badge badge-closed">Закрыта</span>
              <p style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 8 }}>{new Date(shift.openDate).toLocaleDateString('ru-RU')}, {getShortWeekday(shift.openDate)}</p>
              <div style={{ marginTop: 6, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {shift.employeeIds?.map(eid => (
                  <span key={eid} style={{ background: 'var(--surface-light)', padding: '4px 10px', borderRadius: 12, fontSize: 11, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span>{getEmpName(eid)}</span>
                    {getEmpShiftTypeName(shift, eid) && (
                      <span>{getEmpShiftTypeName(shift, eid)}</span>
                    )}
                  </span>
                ))}
              </div>
              {shift.comment && (
                <p style={{ fontSize: 12, marginTop: 6, color: 'var(--text-secondary)', fontStyle: 'italic' }}>{shift.comment}</p>
              )}
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-secondary)' }}>#{shift.shiftNumber || shift.id.slice(-4)}</div>
              <div style={{ fontSize: 20, fontWeight: 700, marginTop: 4 }}>{shift.revenue.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
```

---

### src/pages/Login.jsx

```jsx
import { useState } from 'react';
import { store } from '../store';
import { LogIn } from 'lucide-react';

export default function Login({ onLogin }) {
  const [pin, setPin] = useState('');

  const handlePin = async () => {
    const user = await store.loginByPin(pin);
    if (user) onLogin(user);
    else alert('Неверный PIN');
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 24, maxWidth: 430, margin: '0 auto' }}>
      <div className="page-header" style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1 style={{ fontSize: 36, marginBottom: 8 }}>Бистро24</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Кассовый учёт смен</p>
      </div>

      <div className="form-group">
        <label className="form-label">PIN-код</label>
        <input type="password" inputMode="numeric" className="form-input" value={pin} onChange={e => setPin(e.target.value)} placeholder="••••" maxLength={4} />
      </div>
      <button className="btn btn-primary" onClick={handlePin}><LogIn size={18} /> Войти</button>

      <div style={{ marginTop: 24, padding: 16, background: 'var(--surface)', borderRadius: 12 }}>
        <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 8 }}>Демо-доступ:</p>
        <div style={{ fontSize: 13, marginBottom: 4 }}><span className="role-badge role-seller">Продавец</span> PIN 1111</div>
        <div style={{ fontSize: 13, marginBottom: 4 }}><span className="role-badge role-manager">Управляющий</span> PIN 2222</div>
        <div style={{ fontSize: 13 }}><span className="role-badge role-owner">Владелец</span> PIN 3333</div>
      </div>
    </div>
  );
}
```

---

### src/pages/NewGoodsOperation.jsx

```jsx
const toLocalInput = (d = new Date()) => {
  const offset = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - offset).toISOString().slice(0, 16);
};

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { store, toNum } from '../store';
import { ArrowLeft } from 'lucide-react';
import PhotoCapture from '../components/PhotoCapture';

export default function NewGoodsOperation({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [refs, setRefs] = useState(null);
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');
  const [counterpartyId, setCounterpartyId] = useState('');
  const [writeOffTypeId, setWriteOffTypeId] = useState('');
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 16));
  const [comment, setComment] = useState('');
  const [photoIds, setPhotoIds] = useState([]);

  useEffect(() => {
    store.getReferences().then(r => setRefs(r));
  }, []);

  const handleSubmit = async () => {
    const n = toNum(amount);
    if (!Number.isFinite(n) || n <= 0) return alert('Введите корректную сумму');
    if (shift && date && new Date(date) < new Date(shift.openDate)) {
      return alert('Дата операции не может быть раньше даты открытия смены');
    }
    if (!date) return alert('Укажите дату');

    if (type === 'income') {
      if (!counterpartyId) return alert('Выберите контрагента');
    }
    if (type === 'expense') {
      if (!writeOffTypeId) return alert('Выберите статью списания');
    }

    const payload = {
      shiftId: id || null,
      amount: n,
      type,
      category: 'goods',
      counterpartyId: type === 'income' ? counterpartyId : null,
      writeOffTypeId: type === 'expense' ? writeOffTypeId : null,
      employeeId: user.id,
      date: new Date(date).toISOString(),
      comment,
      photoIds,
    };

    await store.addOperation(payload, user.id);
    if (id) {
      navigate(`/shift/${id}`);
    } else {
      navigate('/operations');
    }
  };

  if (!refs) return <div className="empty-state">Загрузка...</div>;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>{id ? 'Товарная операция' : 'Товарная операция (вне смены)'}</h1>
      </div>

      <div className="form-group">
        <label className="form-label">Тип</label>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className={'btn ' + (type === 'income' ? 'btn-success' : 'btn-secondary')} onClick={() => { setType('income'); setWriteOffTypeId(''); }} style={{ flex: 1 }}>Приход</button>
          <button className={'btn ' + (type === 'expense' ? 'btn-danger' : 'btn-secondary')} onClick={() => setType('expense')} style={{ flex: 1 }}>Списание</button>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Дата и время</label>
        <input type="datetime-local" className="form-input" value={date} onChange={e => setDate(e.target.value)} />
      </div>

      <div className="form-group">
        <label className="form-label">Сумма, ₽</label>
        <input type="tel" inputMode="decimal" pattern="[0-9.,]*" className="form-input" value={amount} onChange={e => setAmount(e.target.value)} placeholder="0" />
      </div>

      {type === 'expense' && (
        <div className="form-group">
          <label className="form-label">Статья списания</label>
          <select className="form-select" value={writeOffTypeId} onChange={e => setWriteOffTypeId(e.target.value)}>
            <option value="">Выберите статью...</option>
            {refs.writeOffTypes?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
          {(!refs.writeOffTypes || refs.writeOffTypes.filter(t => t.active).length === 0) && (
            <p style={{ fontSize: 12, color: 'var(--warning)', marginTop: 6 }}>
              Справочник статей списания пуст. Добавьте записи в Настройки → Справочники → Статьи списания.
            </p>
          )}
        </div>
      )}

      {type === 'income' && (
        <div className="form-group">
          <label className="form-label">Контрагент</label>
          <select className="form-select" value={counterpartyId} onChange={e => setCounterpartyId(e.target.value)}>
            <option value="">Выберите контрагента...</option>
            {refs.counterparties?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
          {(!refs.counterparties || refs.counterparties.filter(t => t.active).length === 0) && (
            <p style={{ fontSize: 12, color: 'var(--warning)', marginTop: 6 }}>
              Справочник контрагентов пуст. Добавьте записи в Настройки → Справочники → Контрагенты.
            </p>
          )}
        </div>
      )}

      <div className="form-group">
        <label className="form-label">Комментарий</label>
        <input type="text" className="form-input" value={comment} onChange={e => setComment(e.target.value)} placeholder="Необязательно" />
      </div>

      <PhotoCapture photoIds={photoIds} onChange={setPhotoIds} />

      <button className="btn btn-primary" onClick={handleSubmit} style={{ marginTop: 16, marginBottom: 40 }}>Сохранить операцию</button>
    </div>
  );
}
```

---

### src/pages/NewOperation.jsx

```jsx
const toLocalInput = (d = new Date()) => {
  const offset = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - offset).toISOString().slice(0, 16);
};

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { store, nowISO, toNum } from '../store';
import { ArrowLeft } from 'lucide-react';
import PhotoCapture from '../components/PhotoCapture';

export default function NewOperation({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [refs, setRefs] = useState(null);
  const [type, setType] = useState('expense');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(toLocalInput());
  const [expenseTypeId, setExpenseTypeId] = useState('');
  const [paymentFormId, setPaymentFormId] = useState('');
  const [relatedId, setRelatedId] = useState('');
  const [sourceId, setSourceId] = useState('');
  const [comment, setComment] = useState('');
  const [photoIds, setPhotoIds] = useState([]);
  const [shift, setShift] = useState(null);

  useEffect(() => {
    if (id && id !== 'new') {
      store.getShift(id).then(s => setShift(s));
    }
  }, [id]);

  useEffect(() => {
    store.getReferences().then(r => {
      setRefs(r);
      if (!isStandalone) {
        const cashForm = r.paymentForms?.find(t => t.active && t.name === 'Наличные');
        if (cashForm) setPaymentFormId(cashForm.id);
      }
    });
  }, []);

  const selectedExpenseType = refs?.expenseTypes?.find(t => t.id === expenseTypeId);
  const linkedRef = selectedExpenseType?.linkedRef;
  const filterRoles = selectedExpenseType?.filterRoles;

  const handleSubmit = async () => {
    const n = toNum(amount);
    if (!Number.isFinite(n) || n <= 0) return alert('Введите корректную сумму');
    if (shift && date && new Date(date) < new Date(shift.openDate)) {
      return alert('Дата операции не может быть раньше даты открытия смены');
    }
    if (isStandalone && !paymentFormId) return alert('Выберите форму оплаты');

    if (type === 'expense') {
      if (!expenseTypeId) return alert('Выберите статью расхода');
      if (linkedRef && !relatedId) {
        return alert('Заполните связанный справочник для выбранной статьи расхода');
      }
    }
    if (type === 'income' && !sourceId) {
      return alert('Выберите источник поступления');
    }

    const payload = {
      shiftId: isStandalone ? null : id,
      amount: n,
      type,
      date: date ? new Date(date).toISOString() : nowISO(),
      expenseTypeId: type === 'expense' ? expenseTypeId : null,
      paymentFormId,
      employeeId: user.id,
      comment,
      photoIds,
    };

    if (type === 'income') {
      payload.sourceId = sourceId;
    }
    if (linkedRef === 'employees' && relatedId) payload.employeeId = relatedId;
    if (linkedRef === 'contractors' && relatedId) payload.contractorId = relatedId;
    if (linkedRef === 'counterparties' && relatedId) payload.counterpartyId = relatedId;

    await store.addOperation(payload, user.id);
    if (isStandalone) navigate('/operations');
    else navigate(`/shift/${id}/operations`);
  };

  const getLinkedItems = () => {
    if (!linkedRef || !refs) return [];
    let items = refs[linkedRef]?.filter(t => t.active) || [];
    if (filterRoles && filterRoles.length > 0) {
      items = items.filter(i => filterRoles.includes(i.role));
    }
    if (linkedRef === 'employees' && selectedExpenseType?.name?.toLowerCase().includes('заработная')) {
      items = items.filter(i => i.role === 'seller' || i.role === 'manager');
    }
    return items;
  };

  const linkedItems = getLinkedItems();
  const showLinked = type === 'expense' && linkedRef && linkedItems.length > 0;
  const linkedLabel = linkedRef === 'employees' ? 'Сотрудник' : linkedRef === 'contractors' ? 'Подрядчик' : linkedRef === 'counterparties' ? 'Контрагент' : 'Связанный';
  const isStandalone = !id || id === 'new';

  if (!refs) return <div className="empty-state">Загрузка...</div>;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>Новая операция{isStandalone ? ' (вне смены)' : ''}</h1>
      </div>

      <div className="form-group">
        <label className="form-label">Дата и время</label>
        <input type="datetime-local" className="form-input" value={date} onChange={e => setDate(e.target.value)} />
      </div>

      <div className="form-group">
        <label className="form-label">Тип</label>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className={'btn ' + (type === 'income' ? 'btn-success' : 'btn-secondary')} onClick={() => { setType('income'); setExpenseTypeId(''); setRelatedId(''); }} style={{ flex: 1 }}>Внесение</button>
          <button className={'btn ' + (type === 'expense' ? 'btn-danger' : 'btn-secondary')} onClick={() => { setType('expense'); setRelatedId(''); setSourceId(''); }} style={{ flex: 1 }}>Расход</button>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Сумма, ₽</label>
        <input type="tel" inputMode="decimal" pattern="[0-9.,]*" className="form-input" value={amount} onChange={e => setAmount(e.target.value)} placeholder="0" />
      </div>

      {type === 'expense' && (
        <div className="form-group">
          <label className="form-label">Статья расхода</label>
          <select className="form-select" value={expenseTypeId} onChange={e => { setExpenseTypeId(e.target.value); setRelatedId(''); }}>
            <option value="">Выберите статью...</option>
            {refs.expenseTypes?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </div>
      )}

      {showLinked && (
        <div className="form-group">
          <label className="form-label">{linkedLabel}</label>
          <select className="form-select" value={relatedId} onChange={e => setRelatedId(e.target.value)}>
            <option value="">Выберите {linkedLabel.toLowerCase()}...</option>
            {linkedItems.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
          </select>
        </div>
      )}

      {type === 'income' && (
        <div className="form-group">
          <label className="form-label">Источник поступления</label>
          <select className="form-select" value={sourceId} onChange={e => setSourceId(e.target.value)}>
            <option value="">Выберите источник...</option>
            {refs.incomeSources?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
          {(!refs.incomeSources || refs.incomeSources.filter(t => t.active).length === 0) && (
            <p style={{ fontSize: 12, color: 'var(--warning)', marginTop: 6 }}>
              Справочник источников поступлений пуст. Добавьте записи в Настройки → Справочники → Источники поступлений.
            </p>
          )}
        </div>
      )}

      {isStandalone && (
        <div className="form-group">
          <label className="form-label">Форма оплаты</label>
          <select className="form-select" value={paymentFormId} onChange={e => setPaymentFormId(e.target.value)}>
            <option value="">Выберите форму оплаты...</option>
            {refs.paymentForms?.filter(t => t.active && t.name !== 'Наличные').map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </div>
      )}

      <div className="form-group">
        <label className="form-label">Комментарий</label>
        <input type="text" className="form-input" value={comment} onChange={e => setComment(e.target.value)} placeholder="Необязательно" />
      </div>

      <PhotoCapture photoIds={photoIds} onChange={setPhotoIds} />

      <button className="btn btn-primary" onClick={handleSubmit} style={{ marginTop: 16, marginBottom: 40 }}>Сохранить операцию</button>
    </div>
  );
}
```

---

### src/pages/Operations.jsx

```jsx
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { store } from '../store';
import { ArrowLeft, Plus, Trash2, Edit3 } from 'lucide-react';

export default function Operations({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [ops, setOps] = useState([]);
  const [refs, setRefs] = useState({});
  const [photos, setPhotos] = useState({});
  const [shift, setShift] = useState(null);

  useEffect(() => { load(); }, [id, location.key]);

  const load = async () => {
    const s = await store.getShift(id);
    const o = await store.getOperationsByShift(id);
    const r = await store.getReferences();
    setShift(s);
    setOps(o);
    setRefs(r);
    const ph = {};
    for (const op of o) {
      for (const pid of op.photoIds || []) {
        const p = await store.getPhoto(pid);
        if (p) ph[pid] = p.dataUrl;
      }
    }
    setPhotos(ph);
  };

  const handleDelete = async (opId, e) => {
    e.stopPropagation();
    if (!confirm('Удалить операцию?')) return;
    await store.deleteOperation(opId, user.id);
    load();
  };

  const getName = (list, id) => refs[list]?.find(x => x.id === id)?.name || '-';
  const getRelatedName = (op) => {
    if (op.category === 'goods') {
      const parts = [];
      if (op.writeOffTypeId) parts.push(getName('writeOffTypes', op.writeOffTypeId));
      if (op.counterpartyId) parts.push(getName('counterparties', op.counterpartyId));
      return parts.length > 0 ? parts.join(' • ') : null;
    }
    if (op.sourceId) return getName('incomeSources', op.sourceId);
    if (op.contractorId) return getName('contractors', op.contractorId);
    if (op.counterpartyId) return getName('counterparties', op.counterpartyId);
    // Для расходов на зарплату employeeId содержит получателя, а не создателя
    if (op.type === 'expense' && op.employeeId) {
      const expenseType = refs.expenseTypes?.find(t => t.id === op.expenseTypeId);
      if (expenseType?.linkedRef === 'employees') {
        return getName('employees', op.employeeId);
      }
    }
    return null;
  };

  const canEdit = shift?.status === 'Открыта' && store.canEditOperation(shift, user);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>Операции</h1>
      </div>

      {shift?.status === 'Открыта' && canEdit && (
        <button className="btn btn-primary" onClick={() => navigate(`/shift/${id}/operations/new`)} style={{ marginBottom: 16 }}>
          <Plus size={18} /> Новая операция
        </button>
      )}

      {ops.length === 0 && <div className="empty-state">Нет операций</div>}

      {ops.map(op => (
        <div key={op.id} className="card" style={{ marginBottom: 12, cursor: canEdit ? 'pointer' : 'default' }} onClick={() => canEdit && navigate(`/shift/${id}/operations/${op.id}/edit`)}>
          <div className="list-item" style={{ marginBottom: 0, padding: 0, background: 'none', border: 'none' }}>
            <div className="list-item-info">
              <h3>
                {op.category === 'goods'
                  ? (op.type === 'income' ? 'Приход товара' : (getName('writeOffTypes', op.writeOffTypeId) || 'Товарное списание'))
                  : (getName('expenseTypes', op.expenseTypeId) || (op.type === 'income' ? 'Внесение' : 'Расход'))}
              </h3>
              <p>{new Date(op.date).toLocaleString('ru-RU')} • {op.category === 'goods' ? '—' : getName('paymentForms', op.paymentFormId)}</p>
              {getRelatedName(op) && <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>{getRelatedName(op)}</p>}
              {op.comment && <p style={{ fontSize: 12, marginTop: 4, fontStyle: 'italic' }}>{op.comment}</p>}
              {op.category === 'goods' && (
                <p style={{ fontSize: 11, color: 'var(--success)', marginTop: 4 }}>товар</p>
              )}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div className={'list-item-amount ' + (op.type === 'income' ? 'amount-income' : 'amount-expense')} style={{ whiteSpace: 'nowrap' }}>
                {op.type === 'income' ? '+' : '-'}{op.amount.toLocaleString('ru-RU')} ₽
              </div>
              {canEdit && (
                <>
                  <button onClick={(e) => { e.stopPropagation(); navigate(`/shift/${id}/operations/${op.id}/edit`); }} style={{ background: 'var(--surface-light)', border: 'none', borderRadius: 6, padding: 8, color: 'var(--text)' }}>
                    <Edit3 size={14} />
                  </button>
                  <button onClick={(e) => handleDelete(op.id, e)} style={{ background: 'var(--danger)', border: 'none', borderRadius: 6, padding: 8, color: '#fff' }}>
                    <Trash2 size={14} />
                  </button>
                </>
              )}
            </div>
          </div>
          {op.photoIds?.length > 0 && (
            <div className="photo-grid" style={{ marginTop: 12 }}>
              {op.photoIds.map(pid => (
                <img key={pid} src={photos[pid] || ''} alt="" className="photo-thumb" style={{ borderRadius: 8 }} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
```

---

### src/pages/Payroll.jsx

```jsx
import { useState, useEffect } from 'react';
import { store, getShortWeekday } from '../store';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Payroll({ user }) {
  const navigate = useNavigate();
  const isManager = user.role === 'manager' || user.role === 'owner';

  const [data, setData] = useState(null);
  const [allData, setAllData] = useState(null);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [employees, setEmployees] = useState([]);
  const [selectedEmpId, setSelectedEmpId] = useState(isManager ? '' : user.id);

  const monthNames = [
    'Январь','Февраль','Март','Апрель','Май','Июнь',
    'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'
  ];

  useEffect(() => {
    if (isManager) {
      store.getUsers().then(u => setEmployees(u.filter(e => e.role === 'seller')));
    }
  }, []);

  useEffect(() => { load(); }, [year, month, selectedEmpId]);

  const load = async () => {
    if (isManager && !selectedEmpId) {
      const result = await store.calculatePayrollAll(year, month);
      setAllData(result);
      setData(null);
    } else {
      const empId = selectedEmpId || user.id;
      const result = await store.calculatePayroll(empId, year, month);
      setData(result);
      setAllData(null);
    }
  };

  const prevMonth = () => {
    if (month === 1) { setMonth(12); setYear(y => y - 1); }
    else { setMonth(m => m - 1); }
  };

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const isFuture = year > currentYear || (year === currentYear && month > currentMonth);

  const nextMonth = () => {
    if (isFuture) return;
    if (month === 12) { setMonth(1); setYear(y => y + 1); }
    else { setMonth(m => m + 1); }
  };

  const accrued = data?.total || 0;
  const paid = data?.paid || 0;
  const balance = accrued - paid;
  const totalBase = data?.lines.reduce((s, l) => s + l.baseSalary, 0) || 0;
  const totalPercent = data?.lines.reduce((s, l) => s + l.percentAmount, 0) || 0;

  const selectedEmpName = employees.find(e => e.id === selectedEmpId)?.fullName || user.fullName;

  return (
    <div style={{ minHeight: '100%' }}>
      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <button onClick={prevMonth} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}>
            <ChevronLeft size={20} />
          </button>
          <div style={{ fontSize: 16, fontWeight: 600 }}>{monthNames[month - 1]} {year}</div>
          <button onClick={nextMonth} disabled={isFuture} style={{ background: 'none', border: 'none', color: isFuture ? 'var(--surface-light)' : 'var(--text)', padding: 8, opacity: isFuture ? 0.3 : 1 }}>
            <ChevronRight size={20} />
          </button>
        </div>

        {isManager && employees.length > 0 && (
          <div className="form-group" style={{ marginBottom: 12 }}>
            <select className="form-select" value={selectedEmpId} onChange={e => setSelectedEmpId(e.target.value)}>
              <option value="">Все сотрудники</option>
              {employees.map(e => <option key={e.id} value={e.id}>{e.fullName}</option>)}
            </select>
          </div>
        )}

        {!isManager && (
          <div style={{ fontSize: 13, color: 'var(--text-secondary)', textAlign: 'center', marginBottom: 8 }}>
            {selectedEmpName}
          </div>
        )}

        {allData && (
          <>
            <div style={{ borderTop: '1px solid var(--surface-light)', paddingTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Начислено</div>
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 2 }}>
                    {allData.reduce((s, e) => s + e.lines.reduce((ls, l) => ls + l.baseSalary, 0), 0).toLocaleString('ru-RU')} ₽ оклад + {allData.reduce((s, e) => s + e.lines.reduce((ls, l) => ls + l.percentAmount, 0), 0).toLocaleString('ru-RU')} ₽ %
                  </div>
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--success)' }}>
                  {allData.reduce((s, e) => s + e.total, 0).toLocaleString('ru-RU')} ₽
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid var(--surface-light)', paddingTop: 12, marginTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Выплачено</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--danger)' }}>
                  {allData.reduce((s, e) => s + e.paid, 0).toLocaleString('ru-RU')} ₽
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid var(--surface-light)', paddingTop: 12, marginTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Сальдо</div>
                  <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>
                    {allData.reduce((s, e) => s + e.lines.length, 0)} смен
                  </div>
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: (allData.reduce((s, e) => s + e.total, 0) - allData.reduce((s, e) => s + e.paid, 0)) >= 0 ? 'var(--success)' : 'var(--danger)' }}>
                  {(allData.reduce((s, e) => s + e.total, 0) - allData.reduce((s, e) => s + e.paid, 0)).toLocaleString('ru-RU')} ₽
                </div>
              </div>
            </div>
          </>
        )}

        {data && (
          <>
            <div style={{ borderTop: '1px solid var(--surface-light)', paddingTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Начислено</div>
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 2 }}>
                    оклад {totalBase.toLocaleString('ru-RU')} ₽ + % {totalPercent.toLocaleString('ru-RU')} ₽
                  </div>
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--success)' }}>
                  {accrued.toLocaleString('ru-RU')} ₽
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid var(--surface-light)', paddingTop: 12, marginTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Выплачено</div>
                  {(data?.paidFromOps || 0) > 0 && (
                    <div style={{ fontSize: 10, color: 'var(--text-secondary)', marginTop: 2 }}>
                      в т.ч. через операции {data.paidFromOps.toLocaleString('ru-RU')} ₽
                    </div>
                  )}
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--danger)' }}>
                  {paid.toLocaleString('ru-RU')} ₽
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid var(--surface-light)', paddingTop: 12, marginTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Сальдо</div>
                  <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>
                    {data.lines.length} смен
                  </div>
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: balance >= 0 ? 'var(--success)' : 'var(--danger)' }}>
                  {balance.toLocaleString('ru-RU')} ₽
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {!data && !allData && <div className="empty-state">Загрузка...</div>}

      {allData && allData.length === 0 && (
        <div className="empty-state">Нет данных за этот месяц</div>
      )}

      {allData && allData.map(emp => {
        const empBalance = emp.total - emp.paid;
        return (
          <div key={emp.employeeId} className="card" style={{ marginBottom: 10, cursor: 'pointer' }} onClick={() => setSelectedEmpId(emp.employeeId)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: 15, fontWeight: 600 }}>{emp.fullName}</div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--success)' }}>
                  {emp.total.toLocaleString('ru-RU')} ₽
                </div>
                <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>
                  {emp.lines.length} смен
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, paddingTop: 8, borderTop: '1px solid var(--surface-light)' }}>
              <div style={{ textAlign: 'center', flex: 1, borderRight: '1px solid var(--surface-light)' }}>
                <div style={{ fontSize: 10, color: 'var(--text-secondary)' }}>Начислено</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--success)' }}>{emp.total.toLocaleString('ru-RU')} ₽</div>
              </div>
              <div style={{ textAlign: 'center', flex: 1, borderRight: '1px solid var(--surface-light)' }}>
                <div style={{ fontSize: 10, color: 'var(--text-secondary)' }}>Выплачено</div>
                {(emp.paidFromOps || 0) > 0 && (
                  <div style={{ fontSize: 9, color: 'var(--text-secondary)' }}>в т.ч. операции {emp.paidFromOps.toLocaleString('ru-RU')} ₽</div>
                )}
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--danger)' }}>{emp.paid.toLocaleString('ru-RU')} ₽</div>
              </div>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: 10, color: 'var(--text-secondary)' }}>Сальдо</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: empBalance >= 0 ? 'var(--success)' : 'var(--danger)' }}>{empBalance.toLocaleString('ru-RU')} ₽</div>
              </div>
            </div>
          </div>
        );
      })}

      {data && data.lines.length === 0 && (
        <div className="empty-state">Нет отработанных смен за этот месяц</div>
      )}

      {data && [...data.lines].sort((a, b) => (b.shiftNumber || 0) - (a.shiftNumber || 0)).map((line, idx) => (
        <div key={line.shiftId} className="card" style={{ marginBottom: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>#{line.shiftNumber || idx + 1} — {line.shiftTypeName}</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>
                {new Date(line.date).toLocaleDateString('ru-RU')}, {getShortWeekday(line.date)}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 16, fontWeight: 700 }}>{line.revenue.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginTop: 10, paddingTop: 10, borderTop: '1px solid var(--surface-light)' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Оклад</div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{line.baseSalary.toLocaleString('ru-RU')} ₽</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>% ({line.revenuePercent}%)</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--success)' }}>+{line.percentAmount.toLocaleString('ru-RU')} ₽</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Итого</div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{line.total.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
```

---

### src/pages/References.jsx

```jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { store } from '../store';
import { ArrowLeft, Plus, Trash2, Edit3, Check, X } from 'lucide-react';

export default function References({ user }) {
  const navigate = useNavigate();
  const [tab, setTab] = useState('expenseTypes');
  const [refs, setRefs] = useState({});
  const [newName, setNewName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  useEffect(() => { load(); }, []);

  const load = async () => {
    const r = await store.getReferences();
    setRefs(r);
  };

  const save = async (updated) => {
    await store.saveReferences(updated);
    setRefs(updated);
  };

  const addItem = () => {
    if (!newName.trim()) return;
    const updated = { ...refs };
    const list = [...(updated[tab] || [])];
    list.push({ id: 'ref_' + Date.now(), name: newName.trim(), active: true });
    updated[tab] = list;
    save(updated);
    setNewName('');
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditName(item.name);
  };

  const saveEdit = () => {
    if (!editName.trim()) return;
    const updated = { ...refs };
    updated[tab] = updated[tab].map(i => i.id === editingId ? { ...i, name: editName.trim() } : i);
    save(updated);
    setEditingId(null);
    setEditName('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditName('');
  };

  const toggleActive = (id) => {
    const updated = { ...refs };
    updated[tab] = updated[tab].map(i => i.id === id ? { ...i, active: !i.active } : i);
    save(updated);
  };

  const deleteItem = (id) => {
    if (!confirm('Удалить запись? Операции с ней останутся, но станут отображаться как "—".')) return;
    const updated = { ...refs };
    updated[tab] = updated[tab].filter(i => i.id !== id);
    save(updated);
  };

  const tabs = [
    { key: 'expenseTypes', label: 'Статьи расходов' },
    { key: 'paymentForms', label: 'Формы оплаты' },
    { key: 'contractors', label: 'Подрядчики' },
    { key: 'counterparties', label: 'Контрагенты' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate('/settings')} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>Справочники</h1>
      </div>

      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', marginBottom: 16 }}>
        {tabs.map(t => (
          <button key={t.key} onClick={() => { setTab(t.key); setEditingId(null); }} className={'btn ' + (tab === t.key ? 'btn-primary' : 'btn-secondary')} style={{ padding: '8px 14px', fontSize: 13, whiteSpace: 'nowrap', flex: '0 0 auto' }}>{t.label}</button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input type="text" className="form-input" value={newName} onChange={e => setNewName(e.target.value)} placeholder="Новая запись..." style={{ flex: 1 }} />
        <button className="btn btn-primary" onClick={addItem} style={{ width: 'auto', padding: '14px 20px' }}><Plus size={18} /></button>
      </div>

      {(refs[tab] || []).map(item => (
        <div key={item.id} className="list-item">
          {editingId === item.id ? (
            <>
              <input type="text" className="form-input" value={editName} onChange={e => setEditName(e.target.value)} style={{ flex: 1, marginRight: 8 }} />
              <div style={{ display: 'flex', gap: 4 }}>
                <button onClick={saveEdit} style={{ background: 'var(--success)', border: 'none', borderRadius: 6, padding: 8, color: '#fff' }}><Check size={14} /></button>
                <button onClick={cancelEdit} style={{ background: 'var(--danger)', border: 'none', borderRadius: 6, padding: 8, color: '#fff' }}><X size={14} /></button>
              </div>
            </>
          ) : (
            <>
              <div className="list-item-info" style={{ flex: 1 }}>
                <h3>{item.name}</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <button onClick={() => toggleActive(item.id)} className="btn btn-secondary" style={{ width: 'auto', padding: '6px 10px', fontSize: 11 }}>
                  {item.active ? 'Активна' : 'Скрыта'}
                </button>
                <button onClick={() => startEdit(item)} style={{ background: 'var(--surface-light)', border: 'none', borderRadius: 6, padding: 8, color: 'var(--text)' }}><Edit3 size={14} /></button>
                <button onClick={() => deleteItem(item.id)} style={{ background: 'var(--danger)', border: 'none', borderRadius: 6, padding: 8, color: '#fff' }}><Trash2 size={14} /></button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
```

---

### src/pages/Reports.jsx

```jsx
import { useEffect, useState } from 'react';
import { store } from '../store';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ExportExcel from '../components/ExportExcel';

function localDateStr(isoString) {
  if (!isoString) return '';
  const d = new Date(isoString);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export default function Reports({ user }) {
  const navigate = useNavigate();
  const [shifts, setShifts] = useState([]);
  const [period, setPeriod] = useState('week');

  useEffect(() => {
    store.getShifts().then(all => setShifts(all.filter(s => s.status === 'Закрыта')));
  }, []);

  const now = new Date();
  const todayStr = localDateStr(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
  const weekStr = localDateStr(new Date(now.getTime() - 7 * 86400000));
  const monthStr = localDateStr(new Date(now.getFullYear(), now.getMonth(), 1));

  const filters = {
    today: todayStr,
    week: weekStr,
    month: monthStr,
  };

  const filtered = shifts.filter(s => localDateStr(s.closeDate) >= filters[period]);
  const totalRevenue = filtered.reduce((sum, s) => sum + s.revenue, 0);
  const totalCash = filtered.reduce((sum, s) => sum + s.cash, 0);
  const totalCashless = filtered.reduce((sum, s) => sum + s.cashless, 0);
  const totalExpense = filtered.reduce((sum, s) => sum + s.expense, 0);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'var(--text)' }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>Отчёты</h1>
      </div>

      <ExportExcel />

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {[{k:'today',l:'День'},{k:'week',l:'Неделя'},{k:'month',l:'Месяц'}].map(p => (
          <button key={p.k} className={'btn ' + (period === p.k ? 'btn-primary' : 'btn-secondary')} onClick={() => setPeriod(p.k)} style={{ flex: 1, padding: 10 }}>{p.l}</button>
        ))}
      </div>

      <div className="stats-grid">
        <div className="stat-card"><h3>Выручка</h3><p>{totalRevenue.toLocaleString('ru-RU')} ₽</p></div>
        <div className="stat-card"><h3>Наличные</h3><p>{totalCash.toLocaleString('ru-RU')} ₽</p></div>
        <div className="stat-card"><h3>Безнал</h3><p>{totalCashless.toLocaleString('ru-RU')} ₽</p></div>
        <div className="stat-card"><h3>Расход</h3><p>{totalExpense.toLocaleString('ru-RU')} ₽</p></div>
      </div>

      <h2 style={{ fontSize: 16, marginBottom: 12, color: 'var(--text-secondary)' }}>Смены за период</h2>
      {filtered.length === 0 && <div className="empty-state">Нет данных</div>}
      {filtered.map(s => (
        <div key={s.id} className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Смена #{s.id.slice(-4)}</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{new Date(s.closeDate).toLocaleDateString('ru-RU')}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 16, fontWeight: 700 }}>{s.revenue.toLocaleString('ru-RU')} ₽</div>
              <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>остаток: {s.endBalance.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
```

---

### src/pages/Settings.jsx

```jsx
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { store } from '../store';
import { getSyncConfig, saveSyncConfig, clearSyncConfig, syncNow, subscribeStatus, checkTokenFormat, subscribeConflicts, resolveConflict } from '../githubSync';
import { LogOut, BookOpen, Cloud, CloudOff, RefreshCw, AlertTriangle } from 'lucide-react';
import ExportExcel from '../components/ExportExcel';

export default function Settings({ user }) {
  const navigate = useNavigate();
  const [syncCfg, setSyncCfg] = useState(null);
  const [syncStatus, setSyncStatus] = useState({ state: 'off', lastSync: null, error: null });
  const [token, setToken] = useState('');
  const [owner, setOwner] = useState('pacman1988ninja-lgtm');
  const [repo, setRepo] = useState('Bistro24');
  const [busy, setBusy] = useState(false);
  const [conflicts, setConflicts] = useState([]);

  useEffect(() => {
    setSyncCfg(getSyncConfig());
    const unsub = subscribeStatus(setSyncStatus);
    const unsubConflicts = subscribeConflicts(setConflicts);
    return () => { unsub(); unsubConflicts(); };
  }, []);

  const handleLogout = () => {
    store.logout();
    window.location.reload();
  };

  const confirmPin = () => {
    const entered = prompt('Подтвердите PIN-код для управления синхронизацией:');
    if (entered === null) return false;
    if (entered !== user.pin) {
      alert('Неверный PIN');
      return false;
    }
    return true;
  };

  const handleSaveSync = async () => {
    if (!token.trim()) return alert('Введите токен GitHub');
    if (!confirmPin()) return;
    const warning = checkTokenFormat(token);
    if (warning && !confirm(`${warning}\n\nВсё равно продолжить с этим токеном?`)) return;
    setBusy(true);
    saveSyncConfig({ token, owner, repo });
    setSyncCfg(getSyncConfig());
    setToken('');
    const ok = await syncNow();
    setBusy(false);
    if (ok) alert('Синхронизация настроена и выполнена');
  };

  const handleSyncNow = async () => {
    setBusy(true);
    await syncNow();
    setBusy(false);
  };

  const handleDisableSync = () => {
    if (!confirmPin()) return;
    if (!confirm('Отключить синхронизацию с GitHub? Данные останутся на этом устройстве и в репозитории, но перестанут обновляться.')) return;
    clearSyncConfig();
    setSyncCfg(null);
  };

  const handleResolveConflict = async (conflictId, keep) => {
    await resolveConflict(conflictId, keep);
  };

  const describeRecord = (collection, rec) => {
    if (!rec) return '—';
    if (collection === 'shifts') return `Смена #${rec.shiftNumber || rec.id?.slice(-4)}, статус: ${rec.status}, выручка: ${rec.revenue ?? '—'} ₽`;
    if (collection === 'operations') return `Операция ${rec.type === 'income' ? 'приход' : 'расход'}: ${rec.amount} ₽`;
    if (collection === 'users') return `Сотрудник: ${rec.fullName}`;
    if (collection === 'references') return 'Справочники (общий документ)';
    return JSON.stringify(rec).slice(0, 80);
  };

  const isManager = user.role === 'owner' || user.role === 'manager';

  return (
    <div>
      <div className="card" style={{ marginBottom: 16, marginTop: 'env(safe-area-inset-top)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700 }}>
            {user.fullName.charAt(0)}
          </div>
          <div>
            <div style={{ fontWeight: 600 }}>{user.fullName}</div>
            <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{user.email}</div>
            <span className={`role-badge role-${user.role}`}>{user.role}</span>
          </div>
        </div>
      </div>

      {isManager && conflicts.length > 0 && (
        <div className="card" style={{ marginBottom: 16, border: '1px solid var(--warning)' }}>
          <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--warning)' }}>
            <AlertTriangle size={18} /> Конфликты синхронизации ({conflicts.length})
          </div>
          <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 12 }}>
            Одна и та же запись была изменена одновременно на двух устройствах. Сейчас применена более новая версия автоматически, но проверьте — не потеряны ли нужные данные.
          </p>
          {conflicts.map(c => (
            <div key={c.id} style={{ background: 'var(--surface-light)', borderRadius: 10, padding: 10, marginBottom: 8 }}>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 6 }}>{new Date(c.detectedAt).toLocaleString('ru-RU')} · {c.collection}</div>
              <div style={{ fontSize: 13, marginBottom: 4 }}><b>Локальная:</b> {describeRecord(c.collection, c.local)}</div>
              <div style={{ fontSize: 13, marginBottom: 8 }}><b>С другого устройства:</b> {describeRecord(c.collection, c.remote)}</div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn btn-secondary" onClick={() => handleResolveConflict(c.id, 'local')} style={{ flex: 1, padding: 8, fontSize: 12 }}>Оставить локальную</button>
                <button className="btn btn-secondary" onClick={() => handleResolveConflict(c.id, 'remote')} style={{ flex: 1, padding: 8, fontSize: 12 }}>Оставить с др. устройства</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isManager && (
        <div className="card" style={{ marginBottom: 16 }}>
          <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {syncCfg ? <Cloud size={18} /> : <CloudOff size={18} />} Синхронизация с GitHub
          </div>

          {syncCfg ? (
            <div>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 8 }}>
                Репозиторий: {syncCfg.owner}/{syncCfg.repo}, ветка «{syncCfg.branch}»
              </div>
              <div style={{ fontSize: 13, marginBottom: 12 }}>
                {syncStatus.state === 'syncing' && <span style={{ color: 'var(--warning)' }}>Синхронизация…</span>}
                {syncStatus.state === 'ok' && syncStatus.lastSync && (
                  <span style={{ color: 'var(--success)' }}>Синхронизировано: {new Date(syncStatus.lastSync).toLocaleString('ru-RU')}</span>
                )}
                {syncStatus.state === 'error' && <span style={{ color: 'var(--danger)' }}>Ошибка: {syncStatus.error}</span>}
                {(syncStatus.state === 'idle' || syncStatus.state === 'off') && <span style={{ color: 'var(--text-secondary)' }}>Ожидание изменений</span>}
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn btn-secondary" onClick={handleSyncNow} disabled={busy} style={{ flex: 1, padding: 10, fontSize: 13 }}>
                  <RefreshCw size={14} /> Синхронизировать
                </button>
                <button className="btn btn-danger" onClick={handleDisableSync} style={{ flex: 1, padding: 10, fontSize: 13 }}>
                  Отключить
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 12 }}>
                Данные (смены, операции, сотрудники, справочники) будут сохраняться в файл JSON в репозитории и синхронизироваться между устройствами. Фото остаются на устройстве.
              </p>
              <div className="form-group">
                <label className="form-label">Токен GitHub (fine-grained PAT, права contents: read/write)</label>
                <input type="password" className="form-input" value={token} onChange={e => setToken(e.target.value)} placeholder="github_pat_…" />
              </div>
              <div className="form-group">
                <label className="form-label">Владелец / репозиторий</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input type="text" className="form-input" value={owner} onChange={e => setOwner(e.target.value)} style={{ flex: 1 }} />
                  <input type="text" className="form-input" value={repo} onChange={e => setRepo(e.target.value)} style={{ flex: 1 }} />
                </div>
              </div>
              <p style={{ fontSize: 12, color: 'var(--warning)', marginBottom: 12 }}>
                ⚠ Используйте fine-grained-токен, ограниченный только этим репозиторием (не classic-токен с доступом ко всему аккаунту). Если репозиторий публичный — данные файла (включая PIN-коды) будут доступны всем, рекомендуется приватный репозиторий. Включение подтверждается вашим PIN.
              </p>
              <button className="btn btn-primary" onClick={handleSaveSync} disabled={busy} style={{ padding: 10, fontSize: 13 }}>
                <Cloud size={14} /> Включить синхронизацию
              </button>
            </div>
          )}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <ExportExcel />
        {isManager && (
          <button className="btn btn-secondary" onClick={() => navigate('/departments')}>
            <BookOpen size={18} /> Справочники
          </button>
        )}
        <button className="btn btn-danger" onClick={handleLogout} style={{ marginTop: 20 }}>
          <LogOut size={18} /> Выйти
        </button>
      </div>

      <div style={{ marginTop: 24, padding: 12, background: 'var(--surface)', borderRadius: 12, textAlign: 'center' }}>
        <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Бистро24 v2.29</div>
        <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 4 }}>
          {syncCfg ? 'Данные: локально + GitHub' : 'Данные хранятся локально'}
        </div>
      </div>
    </div>
  );
}
```

---

### src/pages/Settlements.jsx

```jsx
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Camera, Image as ImageIcon, Edit3, Trash2 } from 'lucide-react';
import { store } from '../store';

export default function Settlements({ user }) {
  const navigate = useNavigate();
  const [refs, setRefs] = useState({});
  const [ops, setOps] = useState([]);
  const [entityType, setEntityType] = useState('counterparties');
  const [selectedId, setSelectedId] = useState('');

  // Create adjustment modal
  const [showAdjustModal, setShowAdjustModal] = useState(false);
  const [adjustDate, setAdjustDate] = useState(new Date().toISOString().slice(0, 16));
  const [adjustTargetBalance, setAdjustTargetBalance] = useState('');
  const [adjustComment, setAdjustComment] = useState('');
  const [photoIds, setPhotoIds] = useState([]);
  const [photos, setPhotos] = useState({});

  // Edit adjustment modal
  const [showEditModal, setShowEditModal] = useState(false);
  const [editOp, setEditOp] = useState(null);
  const [editDate, setEditDate] = useState('');
  const [editTargetBalance, setEditTargetBalance] = useState('');
  const [editComment, setEditComment] = useState('');
  const [editPhotoIds, setEditPhotoIds] = useState([]);
  const [editPhotos, setEditPhotos] = useState({});
  const [photoModalSrc, setPhotoModalSrc] = useState('');
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  useEffect(() => {
    if (user?.role === 'seller') {
      navigate('/');
      return;
    }
    load();
  }, []);

  const load = async () => {
    const r = await store.getReferences();
    const o = await store.getAllOperations();
    setRefs(r);
    setOps(o);
  };

  const entityOptions = [
    { key: 'counterparties', label: 'Контрагенты' },
    { key: 'contractors', label: 'Подрядчики' },
  ];

  const items = refs[entityType]?.filter(t => t.active) || [];

  const getBalance = (id, excludeOpId) => {
    const entityOps = ops.filter(op => {
      if (op.id === excludeOpId) return false;
      if (entityType === 'counterparties') return op.counterpartyId === id;
      return op.contractorId === id;
    });
    let debt = 0;
    for (const op of entityOps) {
      if (op.category === 'goods' && op.type === 'income') {
        debt += op.amount;
      } else if (op.category === 'adjustment') {
        debt += op.type === 'income' ? op.amount : -op.amount;
      } else if (op.type === 'expense' && (op.counterpartyId === id || op.contractorId === id)) {
        debt -= op.amount;
      }
    }
    return debt;
  };

  const getBalanceOnDate = (id, dateStr, excludeOpId) => {
    const cutoff = new Date(dateStr).getTime();
    const entityOps = ops.filter(op => {
      if (op.id === excludeOpId) return false;
      if (new Date(op.date).getTime() > cutoff) return false;
      if (entityType === 'counterparties') return op.counterpartyId === id;
      return op.contractorId === id;
    });
    let debt = 0;
    for (const op of entityOps) {
      if (op.category === 'goods' && op.type === 'income') {
        debt += op.amount;
      } else if (op.category === 'adjustment') {
        debt += op.type === 'income' ? op.amount : -op.amount;
      } else if (op.type === 'expense' && (op.counterpartyId === id || op.contractorId === id)) {
        debt -= op.amount;
      }
    }
    return debt;
  };

  const itemsWithBalance = items
    .map(item => ({ ...item, balance: getBalance(item.id) }))
    .filter(item => item.balance !== 0)
    .sort((a, b) => b.balance - a.balance);

  const totalDebt = itemsWithBalance.reduce((sum, item) => sum + item.balance, 0);
  const selectedItem = selectedId ? { ...items.find(i => i.id === selectedId), balance: getBalance(selectedId) } : null;

  // Get operations for selected entity, sorted by date ascending for running balance
  const selectedOpsRaw = selectedId
    ? ops.filter(op => {
        if (entityType === 'counterparties') return op.counterpartyId === selectedId;
        return op.contractorId === selectedId;
      })
    : [];

  // Calculate running balance (oldest first)
  const selectedOpsWithBalance = selectedOpsRaw
    .slice().sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(op => {
      let change = 0;
      if (op.category === 'goods' && op.type === 'income') change = op.amount;
      else if (op.category === 'adjustment') change = op.type === 'income' ? op.amount : -op.amount;
      else if (op.type === 'expense') change = -op.amount;
      return { ...op, change };
    });

  let running = 0;
  for (const op of selectedOpsWithBalance) {
    running += op.change;
    op.runningBalance = running;
  }

  // Reverse for display (newest first)
  const selectedOps = selectedOpsWithBalance.reverse();

  const getName = (list, id) => refs[list]?.find(t => t.id === id)?.name || '';
  const getUserName = (id) => refs.employees?.find(e => e.id === id)?.name || refs.users?.find(u => u.id === id)?.fullName || '—';

  const compressImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const maxWidth = 800;
          const scale = Math.min(1, maxWidth / img.width);
          canvas.width = img.width * scale;
          canvas.height = img.height * scale;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL('image/jpeg', 0.7));
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileSelect = async (e, isEdit = false) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    for (const file of files) {
      try {
        const dataUrl = await compressImage(file);
        const photo = await store.addPhoto(dataUrl);
        if (isEdit) {
          setEditPhotoIds(prev => [...prev, photo.id]);
          setEditPhotos(prev => ({ ...prev, [photo.id]: photo.dataUrl }));
        } else {
          setPhotoIds(prev => [...prev, photo.id]);
          setPhotos(prev => ({ ...prev, [photo.id]: photo.dataUrl }));
        }
      } catch (err) {
        alert('Ошибка загрузки фото: ' + err.message);
      }
    }
    e.target.value = '';
  };

  const handleAdjust = async () => {
    if (adjustTargetBalance === '') return alert('Введите новое сальдо');
    const currentBalance = getBalanceOnDate(selectedId, adjustDate);
    const target = Number(adjustTargetBalance);
    const diff = target - currentBalance;
    if (diff === 0) return alert('Новое сальдо равно текущему');

    const payload = {
      type: diff > 0 ? 'income' : 'expense',
      amount: Math.abs(diff),
      date: new Date(adjustDate).toISOString(),
      category: 'adjustment',
      comment: adjustComment || '',
      shiftId: null,
      employeeId: user.id,
      paymentFormId: '',
      expenseTypeId: '',
      counterpartyId: entityType === 'counterparties' ? selectedId : '',
      contractorId: entityType === 'contractors' ? selectedId : '',
      photoIds,
      targetBalance: target,
    };
    await store.addOperation(payload, user.id);
    setShowAdjustModal(false);
    setAdjustTargetBalance('');
    setAdjustComment('');
    setPhotoIds([]);
    setPhotos({});
    load();
  };

  const handleDeleteOp = async (opId) => {
    if (!confirm('Удалить операцию?')) return;
    await store.deleteOperation(opId, user.id);
    load();
  };

  const openEditModal = (op) => {
    setEditOp(op);
    setEditDate(new Date(op.date).toISOString().slice(0, 16));
    setEditTargetBalance(op.targetBalance !== undefined ? String(op.targetBalance) : '');
    setEditComment(op.comment || '');
    setEditPhotoIds(op.photoIds || []);
    const p = {};
    (op.photoIds || []).forEach(pid => {
      if (photos[pid]) p[pid] = photos[pid];
    });
    setEditPhotos(p);
    setShowEditModal(true);
  };

  const handleEditAdjust = async () => {
    if (editTargetBalance === '') return alert('Введите новое сальдо');
    const target = Number(editTargetBalance);
    const currentBalance = getBalanceOnDate(selectedId, editDate, editOp.id);
    const diff = target - currentBalance;
    if (diff === 0) return alert('Новое сальдо равно текущему');

    const payload = {
      type: diff > 0 ? 'income' : 'expense',
      amount: Math.abs(diff),
      date: new Date(editDate).toISOString(),
      category: 'adjustment',
      comment: editComment || '',
      shiftId: null,
      employeeId: user.id,
      paymentFormId: '',
      expenseTypeId: '',
      counterpartyId: entityType === 'counterparties' ? selectedId : '',
      contractorId: entityType === 'contractors' ? selectedId : '',
      photoIds: editPhotoIds,
      targetBalance: target,
    };
    await store.updateOperation(editOp.id, payload, user.id);
    setShowEditModal(false);
    setEditOp(null);
    load();
  };

  return (
    <div style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      <div className="card" style={{ marginBottom: 16 }}>
        <div className="form-group" style={{ marginBottom: 12 }}>
          <label className="form-label">Тип</label>
          <select className="form-select" value={entityType} onChange={e => { setEntityType(e.target.value); setSelectedId(''); }}>
            {entityOptions.map(o => <option key={o.key} value={o.key}>{o.label}</option>)}
          </select>
        </div>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">{entityType === 'counterparties' ? 'Контрагент' : 'Подрядчик'}</label>
          <select className="form-select" value={selectedId} onChange={e => setSelectedId(e.target.value)}>
            <option value="">Все {entityType === 'counterparties' ? 'контрагенты' : 'подрядчики'}</option>
            {items.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Задолженность</span>
          <span style={{ fontSize: 24, fontWeight: 700, color: selectedItem ? (selectedItem.balance > 0 ? 'var(--danger)' : 'var(--success)') : (totalDebt > 0 ? 'var(--danger)' : 'var(--success)') }}>
            {selectedItem ? selectedItem.balance.toLocaleString('ru-RU') : totalDebt.toLocaleString('ru-RU')} ₽
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: selectedId ? 12 : 0 }}>
          <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Просрочено</span>
          <span style={{ fontSize: 20, fontWeight: 600, color: 'var(--warning)' }}>0 ₽</span>
        </div>
        {selectedId && (
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-danger" onClick={() => setShowAdjustModal(true)} style={{ flex: 1, fontSize: 13 }}>
              Корректировка
            </button>
            <button className="btn btn-secondary" onClick={() => setSelectedId('')} style={{ flex: 1, fontSize: 13 }}>
              Назад
            </button>
          </div>
        )}
      </div>

      {selectedId && selectedOps.length === 0 && (
        <div className="empty-state">Нет операций</div>
      )}

      {selectedId && selectedOps.map((op, idx) => (
        <div key={op.id}>
          <div className="card" style={{ marginBottom: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4, color: op.category === 'adjustment' ? 'var(--danger)' : 'inherit' }}>
                  {op.category === 'adjustment'
                    ? 'Корректировка сальдо'
                    : op.category === 'goods'
                      ? (op.type === 'income' ? 'Товарный приход' : 'Товарное списание')
                      : (getName('expenseTypes', op.expenseTypeId) || (op.type === 'income' ? 'Внесение' : 'Расход'))}
                </h4>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                  {new Date(op.date).toLocaleString('ru-RU')} • {getName('paymentForms', op.paymentFormId) || '—'}
                </p>
                <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>
                  {getUserName(op.employeeId)}
                </p>
                {op.comment && op.comment !== 'Корректировка сальдо' && <p style={{ fontSize: 12, marginTop: 4, fontStyle: 'italic' }}>{op.comment}</p>}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                {op.category === 'adjustment' && op.targetBalance !== undefined && (
                  <span style={{ fontSize: 11, color: 'var(--text-secondary)' }}>
                    Сальдо: {op.targetBalance.toLocaleString('ru-RU')} ₽
                  </span>
                )}
                <span style={{ fontSize: 18, fontWeight: 700, color: op.type === 'income' ? 'var(--success)' : 'var(--danger)' }}>
                  {op.type === 'income' ? '+' : '-'}{op.amount.toLocaleString('ru-RU')} ₽
                </span>
                {op.category === 'adjustment' && (
                  <div style={{ display: 'flex', gap: 4 }}>
                    <button onClick={() => openEditModal(op)} style={{ background: 'var(--surface-light)', border: 'none', borderRadius: 6, padding: 6, color: 'var(--text)' }}>
                      <Edit3 size={14} />
                    </button>
                    <button onClick={() => handleDeleteOp(op.id)} style={{ background: 'var(--danger)', border: 'none', borderRadius: 6, padding: 6, color: '#fff' }}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                )}
              </div>
            </div>
            {op.photoIds?.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, marginTop: 10 }}>
                {op.photoIds.map(pid => (
                  <PhotoThumb key={pid} photoId={pid} onClick={() => { store.getPhoto(pid).then(p => p && setPhotoModalSrc(p.dataUrl)); setShowPhotoModal(true); }} />
                ))}
              </div>
            )}
          </div>

          {/* Сальдо ДО операции (под карточкой) = сальдо после предыдущей хронологической */}
          {idx < selectedOps.length - 1 && (
            <div style={{ textAlign: 'right', padding: '4px 12px', fontSize: 13, color: 'var(--text-secondary)', marginBottom: 8 }}>
              Сальдо: <span style={{ fontWeight: 700, color: selectedOps[idx + 1].runningBalance > 0 ? 'var(--danger)' : 'var(--success)' }}>{selectedOps[idx + 1].runningBalance.toLocaleString('ru-RU')} ₽</span>
            </div>
          )}
        </div>
      ))}

      {!selectedId && itemsWithBalance.map(item => (
        <div
          key={item.id}
          className="card"
          onClick={() => setSelectedId(item.id)}
          style={{ marginBottom: 12, cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 16, fontWeight: 500 }}>{item.name}</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: item.balance > 0 ? 'var(--danger)' : 'var(--success)' }}>
              {item.balance.toLocaleString('ru-RU')} ₽
            </span>
          </div>
        </div>
      ))}

      {!selectedId && itemsWithBalance.length === 0 && (
        <div className="empty-state">Нет задолженностей</div>
      )}

      {showAdjustModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200, padding: 16 }}>
          <div className="card" style={{ width: '100%', maxWidth: 360 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Корректировка сальдо</h3>
            <div className="form-group" style={{ marginBottom: 12 }}>
              <label className="form-label">Дата</label>
              <input type="datetime-local" className="form-input" value={adjustDate} onChange={e => setAdjustDate(e.target.value)} />
            </div>
            <div className="form-group" style={{ marginBottom: 12 }}>
              <label className="form-label">Новое сальдо, ₽</label>
              <input type="number" className="form-input" value={adjustTargetBalance} onChange={e => setAdjustTargetBalance(e.target.value)} placeholder="0" />
            </div>
            <div className="form-group" style={{ marginBottom: 12 }}>
              <label className="form-label">Комментарий</label>
              <input type="text" className="form-input" value={adjustComment} onChange={e => setAdjustComment(e.target.value)} placeholder="Корректировка сальдо" />
            </div>
            <div className="form-group" style={{ marginBottom: 16 }}>
              <label className="form-label">Фото первички</label>
              <div style={{ display: 'flex', gap: 8 }}>
                <label className="btn btn-secondary" style={{ flex: 1, fontSize: 13, textAlign: 'center' }}>
                  <Camera size={16} style={{ marginRight: 6, verticalAlign: 'middle' }} /> Камера
                  <input type="file" accept="image/*" capture="environment" onChange={(e) => handleFileSelect(e, false)} style={{ display: 'none' }} />
                </label>
                <label className="btn btn-secondary" style={{ flex: 1, fontSize: 13, textAlign: 'center' }}>
                  <ImageIcon size={16} style={{ marginRight: 6, verticalAlign: 'middle' }} /> Галерея
                  <input type="file" accept="image/*" multiple onChange={(e) => handleFileSelect(e, false)} style={{ display: 'none' }} />
                </label>
              </div>
              {photoIds.length > 0 && (
                <div className="photo-grid" style={{ marginTop: 8 }}>
                  {photoIds.map(pid => (
                    <img key={pid} src={photos[pid] || ''} alt="" className="photo-thumb" style={{ borderRadius: 8 }} />
                  ))}
                </div>
              )}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-primary" onClick={handleAdjust} style={{ flex: 1 }}>Сохранить</button>
              <button className="btn btn-secondary" onClick={() => { setShowAdjustModal(false); setPhotoIds([]); setPhotos({}); }} style={{ flex: 1 }}>Отмена</button>
            </div>
          </div>
        </div>
      )}

      {showEditModal && editOp && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200, padding: 16 }}>
          <div className="card" style={{ width: '100%', maxWidth: 360 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Редактировать корректировку</h3>
            <div className="form-group" style={{ marginBottom: 12 }}>
              <label className="form-label">Дата</label>
              <input type="datetime-local" className="form-input" value={editDate} onChange={e => setEditDate(e.target.value)} />
            </div>
            <div className="form-group" style={{ marginBottom: 12 }}>
              <label className="form-label">Новое сальдо, ₽</label>
              <input type="number" className="form-input" value={editTargetBalance} onChange={e => setEditTargetBalance(e.target.value)} placeholder="0" />
            </div>
            <div className="form-group" style={{ marginBottom: 12 }}>
              <label className="form-label">Комментарий</label>
              <input type="text" className="form-input" value={editComment} onChange={e => setEditComment(e.target.value)} placeholder="Корректировка сальдо" />
            </div>
            <div className="form-group" style={{ marginBottom: 16 }}>
              <label className="form-label">Фото первички</label>
              <div style={{ display: 'flex', gap: 8 }}>
                <label className="btn btn-secondary" style={{ flex: 1, fontSize: 13, textAlign: 'center' }}>
                  <Camera size={16} style={{ marginRight: 6, verticalAlign: 'middle' }} /> Камера
                  <input type="file" accept="image/*" capture="environment" onChange={(e) => handleFileSelect(e, true)} style={{ display: 'none' }} />
                </label>
                <label className="btn btn-secondary" style={{ flex: 1, fontSize: 13, textAlign: 'center' }}>
                  <ImageIcon size={16} style={{ marginRight: 6, verticalAlign: 'middle' }} /> Галерея
                  <input type="file" accept="image/*" multiple onChange={(e) => handleFileSelect(e, true)} style={{ display: 'none' }} />
                </label>
              </div>
              {editPhotoIds.length > 0 && (
                <div className="photo-grid" style={{ marginTop: 8 }}>
                  {editPhotoIds.map(pid => (
                    <img key={pid} src={editPhotos[pid] || photos[pid] || ''} alt="" className="photo-thumb" style={{ borderRadius: 8 }} />
                  ))}
                </div>
              )}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-primary" onClick={handleEditAdjust} style={{ flex: 1 }}>Сохранить</button>
              <button className="btn btn-secondary" onClick={() => { setShowEditModal(false); setEditOp(null); }} style={{ flex: 1 }}>Отмена</button>
            </div>
          </div>
        </div>
      )}

      {showPhotoModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 300, padding: 16 }} onClick={() => setShowPhotoModal(false)}>
          <div style={{ position: 'relative', maxWidth: '100%', maxHeight: '90vh' }}>
            <img src={photoModalSrc} alt="" style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: 8, objectFit: 'contain' }} />
            <button
              onClick={() => setShowPhotoModal(false)}
              style={{ position: 'absolute', top: -40, right: 0, background: 'none', border: 'none', color: '#fff', fontSize: 24, cursor: 'pointer', padding: 8 }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function PhotoThumb({ photoId, onClick }) {
  const [src, setSrc] = useState('');
  useEffect(() => {
    store.getPhoto(photoId).then(p => p && setSrc(p.dataUrl));
  }, [photoId]);
  return (
    <img
      src={src || ''}
      alt=""
      onClick={onClick}
      style={{ width: '100%', aspectRatio: '1', borderRadius: 6, objectFit: 'cover', background: 'var(--surface-light)', cursor: onClick ? 'pointer' : 'default' }}
    />
  );
}
```

---

### src/pages/ShiftDetail.jsx

```jsx
const toLocalInput = (d = new Date()) => {
  const offset = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - offset).toISOString().slice(0, 16);
};

import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { store, getShortWeekday } from '../store';
import { ArrowLeft, Receipt, Lock, List, AlertCircle, Edit3, History, Trash2, ChevronDown, ChevronUp, UserPlus, X, Check, Camera, ImagePlus, Package } from 'lucide-react';

function PhotoThumb({ photoId }) {
  const [src, setSrc] = useState('');
  useEffect(() => {
    store.getPhoto(photoId).then(p => p && setSrc(p.dataUrl));
  }, [photoId]);
  return <img src={src} alt="" className="photo-thumb" style={{ borderRadius: 8 }} />;
}

export default function ShiftDetail({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [shift, setShift] = useState(null);
  const [ops, setOps] = useState([]);
  const [audit, setAudit] = useState([]);
  const [refs, setRefs] = useState({});
  const [showHistory, setShowHistory] = useState(false);
  const [showAddEmp, setShowAddEmp] = useState(false);
  const [addEmpType, setAddEmpType] = useState('');
  const [addEmpId, setAddEmpId] = useState('');
  const [editingTypeFor, setEditingTypeFor] = useState(null);
  const [openDateInput, setOpenDateInput] = useState('');
  const [savingDate, setSavingDate] = useState(false);
  const [editTypeValue, setEditTypeValue] = useState('');
  const [photoBusy, setPhotoBusy] = useState(false);

  useEffect(() => { load(); }, [id, location.key]);

  const load = async () => {
    const s = await store.getShift(id);
    const o = await store.getOperationsByShift(id);
    const a = await store.getAuditLog('shift', id);
    const r = await store.getReferences();
    setShift(s);
    setOps(o);
    setAudit(a);
    setRefs(r);
  };

  const handleDelete = async () => {
    if (!confirm('Удалить смену? Все операции будут удалены. Это действие нельзя отменить.')) return;
    const ok = await store.deleteShift(id, user.id);
    if (ok) navigate('/');
    else alert('Нет прав на удаление или срок редактирования истёк');
  };

  const handleReopen = async () => {
    if (!confirm('Отменить проведение смены? Она станет открытой, данные закрытия будут сброшены.')) return;
    const result = await store.reopenShift(id, user.id);
    if (result?.error === 'has_newer_shifts') {
      alert('Нельзя открыть смену — есть более новые смены.');
    } else if (result?.error === 'has_open_shift') {
      alert('Нельзя открыть смену — есть открытая смена.');
    } else if (result) {
      load();
    } else {
      alert('Нет прав или смена уже открыта.');
    }
  };

  const handleAddEmployeeWithType = async () => {
    if (!addEmpType) return alert('Выберите тип смены');
    if (!addEmpId) return alert('Выберите сотрудника');
    await store.addEmployeeToShift(id, addEmpId, addEmpType);
    setShowAddEmp(false);
    setAddEmpType('');
    setAddEmpId('');
    load();
  };

  const handleRemoveEmployee = async (empId) => {
    if (!confirm('Убрать сотрудника из смены?')) return;
    await store.removeEmployeeFromShift(id, empId);
    load();
  };

  const startEditType = (empId) => {
    setEditingTypeFor(empId);
    setEditTypeValue(getEmpType(empId) || '');
  };

  const saveEditType = async (empId) => {
    if (!editTypeValue) return alert('Выберите тип смены');
    await store.updateEmployeeShiftType(id, empId, editTypeValue);
    setEditingTypeFor(null);
    setEditTypeValue('');
    load();
  };

  const cancelEditType = () => {
    setEditingTypeFor(null);
    setEditTypeValue('');
  };

  const compressImage = (file) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxWidth = 1000;
        const scale = Math.min(1, maxWidth / img.width);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.75));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });

  const handleAddShiftPhotos = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setPhotoBusy(true);
    const ids = [...(shift.photoIds || [])];
    for (const file of files) {
      const dataUrl = await compressImage(file);
      const photo = await store.addPhoto(dataUrl);
      ids.push(photo.id);
    }
    await store.updateShiftPhotos(id, ids);
    setPhotoBusy(false);
    e.target.value = '';
    load();
  };

  const handleRemoveShiftPhoto = async (photoId) => {
    const ids = (shift.photoIds || []).filter(p => p !== photoId);
    await store.deletePhoto(photoId);
    await store.updateShiftPhotos(id, ids);
    load();
  };

  if (!shift) return <div className="empty-state">Загрузка...</div>;

  const getEmpType = (empId) => shift.employeeShiftTypes?.[empId] ?? shift.shiftTypeId ?? null;
  const getEmpTypeName = (empId) => {
    const tid = getEmpType(empId);
    return tid ? refs.shiftTypes?.find(t => t.id === tid)?.name : null;
  };
  const allowedTypesFor = (empId) => {
    const emp = refs.employees?.find(e => e.id === empId);
    return (refs.shiftTypes || []).filter(t =>
      t.active && (!emp?.shiftTypes?.length || emp.shiftTypes.includes(t.id))
    );
  };

  const cashFormId = refs.paymentForms?.find(p => p.name === 'Наличные')?.id;
  const cashOps = ops.filter(o => !o.category || o.category === 'cash');
  const goodsOps = ops.filter(o => o.category === 'goods');
  const totalIncome = cashOps.filter(o => o.type === 'income' && o.paymentFormId === cashFormId).reduce((s, o) => s + o.amount, 0);
  const totalExpense = cashOps.filter(o => o.type === 'expense' && o.paymentFormId === cashFormId).reduce((s, o) => s + o.amount, 0);
  const goodsIncome = goodsOps.filter(o => o.type === 'income').reduce((s, o) => s + o.amount, 0);
  const goodsExpense = goodsOps.filter(o => o.type === 'expense').reduce((s, o) => s + o.amount, 0);
  const canEdit = shift.status === 'Открыта' && (shift.employeeIds?.includes(user.id) || user.role !== 'seller');
  const canModifyClosed = store.canEditShift(shift, user);
  const canEditPhotos = shift.status === 'Открыта' ? canEdit : canModifyClosed;
  const isOwner = user.role === 'owner';
  const getUserName = (eid) => refs.employees?.find(e => e.id === eid)?.name || '—';

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
          <h1 style={{ fontSize: 22 }}>Смена #{shift.shiftNumber || shift.id.slice(-4)}</h1>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {shift.status === 'Закрыта' && canModifyClosed && (
            <>
              <button onClick={handleReopen} className="btn btn-secondary" style={{ width: 'auto', padding: '6px 10px', fontSize: 11, color: 'var(--warning)', whiteSpace: 'nowrap' }}><Lock size={12} /> Открыть</button>
              <button onClick={() => navigate(`/shift/${id}/edit`)} className="btn btn-secondary" style={{ width: 'auto', padding: '6px 10px', fontSize: 11, whiteSpace: 'nowrap' }}><Edit3 size={12} /> Изменить</button>
              <button onClick={handleDelete} className="btn btn-secondary" style={{ width: 'auto', padding: '6px 10px', fontSize: 11, color: 'var(--danger)', whiteSpace: 'nowrap' }}><Trash2 size={12} /> Удалить</button>
            </>
          )}
          {shift.status === 'Открыта' && (
            <button onClick={handleDelete} className="btn btn-secondary" style={{ width: 'auto', padding: '8px 12px', fontSize: 12, color: 'var(--danger)' }}><Trash2 size={14} /> Удалить</button>
          )}
        </div>
      </div>

      <div className="card" style={{ marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--text-secondary)' }}>
          {shift.status === 'Открыта' && canEdit ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span>Открыта:</span>
              <input
                type="datetime-local"
                value={openDateInput}
                onChange={e => setOpenDateInput(e.target.value)}
                onBlur={async () => {
                  if (!openDateInput || !shift) return;
                  setSavingDate(true);
                  try {
                    await store.updateShiftOpenDate(shift.id, openDateInput);
                  } catch (err) {
                    alert('Ошибка: ' + err.message);
                  } finally {
                    setSavingDate(false);
                  }
                }}
                disabled={savingDate}
                style={{
                  background: 'var(--surface-light)',
                  color: 'var(--text)',
                  border: '1px solid var(--border)',
                  borderRadius: 6,
                  padding: '4px 8px',
                  fontSize: 13,
                  fontFamily: 'inherit',
                }}
              />
              <span>, {getShortWeekday(shift.openDate)}</span>
              {savingDate && <span style={{ fontSize: 11, color: 'var(--text-secondary)' }}>сохранение...</span>}
            </div>
          ) : (
            <span>Открыта: {new Date(shift.openDate).toLocaleString('ru-RU')}, {getShortWeekday(shift.openDate)}</span>
          )}
          {shift.closeDate && <span>Закрыта: {new Date(shift.closeDate).toLocaleString('ru-RU')}, {getShortWeekday(shift.closeDate)}</span>}
        </div>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-title">Сотрудники смены</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
          {shift.employeeIds?.map(eid => (
            <div key={eid} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, background: 'var(--surface-light)', padding: '6px 12px', borderRadius: 20, fontSize: 13, minWidth: 90 }}>
              <span>{getUserName(eid)}</span>
              {editingTypeFor === eid ? (
                <div style={{ display: 'flex', gap: 4, alignItems: 'center', marginTop: 4 }}>
                  <select
                    className="form-select"
                    value={editTypeValue}
                    onChange={e => setEditTypeValue(e.target.value)}
                    style={{ padding: '4px 6px', fontSize: 11, borderRadius: 6 }}
                  >
                    <option value="">тип...</option>
                    {allowedTypesFor(eid).map(t => (
                      <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                  </select>
                  <button onClick={() => saveEditType(eid)} style={{ background: 'var(--success)', border: 'none', borderRadius: 6, padding: 4, color: '#fff' }}><Check size={12} /></button>
                  <button onClick={cancelEditType} style={{ background: 'var(--danger)', border: 'none', borderRadius: 6, padding: 4, color: '#fff' }}><X size={12} /></button>
                </div>
              ) : (
                <span
                  onClick={() => (shift.status === 'Открыта' && canEdit) && startEditType(eid)}
                  style={{ color: 'var(--text-secondary)', fontSize: 11, cursor: (shift.status === 'Открыта' && canEdit) ? 'pointer' : 'default', textDecoration: (shift.status === 'Открыта' && canEdit) ? 'underline dotted' : 'none' }}
                >
                  {getEmpTypeName(eid) || '—'}
                </span>
              )}
              {shift.status === 'Открыта' && canEdit && shift.employeeIds.length > 1 && editingTypeFor !== eid && (
                <button onClick={() => handleRemoveEmployee(eid)} style={{ background: 'none', border: 'none', color: 'var(--danger)', padding: 0, marginTop: 2 }}><X size={14} /></button>
              )}
            </div>
          ))}
        </div>
        {shift.status === 'Открыта' && canEdit && (
          <>
            <button className="btn btn-secondary" onClick={() => setShowAddEmp(!showAddEmp)} style={{ padding: 10, fontSize: 13 }}>
              <UserPlus size={14} style={{ marginRight: 4 }} /> Добавить сотрудника
            </button>
            {showAddEmp && (
              <div className="card" style={{ marginTop: 8, background: 'var(--surface-light)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Тип смены</label>
                    <select className="form-select" value={addEmpType} onChange={e => { setAddEmpType(e.target.value); setAddEmpId(''); }}>
                      <option value="">Выберите тип...</option>
                      {refs.shiftTypes?.filter(t => t.active).map(t => (
                        <option key={t.id} value={t.id}>{t.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Сотрудник</label>
                    <select className="form-select" value={addEmpId} onChange={e => setAddEmpId(e.target.value)}>
                      <option value="">Выберите сотрудника...</option>
                      {addEmpType && refs.employees?.filter(e => {
                        if (!e.active) return false;
                        if (shift.employeeIds?.includes(e.id)) return false;
                        if (e.shiftTypes && e.shiftTypes.length > 0) return e.shiftTypes.includes(addEmpType);
                        return true;
                      }).map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
                    </select>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button className="btn btn-success" onClick={handleAddEmployeeWithType} style={{ flex: 1 }}>Добавить</button>
                    <button className="btn btn-secondary" onClick={() => { setShowAddEmp(false); setAddEmpType(''); setAddEmpId(''); }} style={{ flex: 1 }}>Отмена</button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="stats-grid">
        <div className="stat-card"><h3>Начало</h3><p>{shift.startBalance.toLocaleString('ru-RU')} ₽</p></div>
        <div className="stat-card"><h3>Конец</h3><p>{shift.endBalance.toLocaleString('ru-RU')} ₽</p></div>
      </div>

      {shift.status === 'Закрыта' && (
        <div className="card" style={{ marginBottom: 16 }}>
          <div className="card-title">Итоги закрытия</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div><div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Выручка</div><div style={{ fontSize: 18, fontWeight: 600 }}>{shift.revenue.toLocaleString('ru-RU')} ₽</div></div>
            <div><div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Наличные</div><div style={{ fontSize: 18, fontWeight: 600 }}>{shift.cash.toLocaleString('ru-RU')} ₽</div></div>
            <div><div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Безнал</div><div style={{ fontSize: 18, fontWeight: 600 }}>{shift.cashless.toLocaleString('ru-RU')} ₽</div></div>
            <div><div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Расход</div><div style={{ fontSize: 18, fontWeight: 600 }}>{shift.expense.toLocaleString('ru-RU')} ₽</div></div>
          </div>
          {shift.revenue !== shift.cash + shift.cashless && (
            <div style={{ color: 'var(--warning)', fontSize: 13, marginTop: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
              <AlertCircle size={14} /> Выручка ≠ Наличные + Безнал
            </div>
          )}
          {shift.comment && (
            <p style={{ fontSize: 13, marginTop: 10, color: 'var(--text-secondary)', fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 10 }}>
              Комментарий: {shift.comment}
            </p>
          )}
        </div>
      )}

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-title">Операции</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
          <div style={{ textAlign: 'center' }}><div style={{ fontSize: 20, color: 'var(--success)', fontWeight: 700 }}>+{totalIncome.toLocaleString('ru-RU')}</div><div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Внесение</div></div>
          <div style={{ textAlign: 'center' }}><div style={{ fontSize: 20, color: 'var(--danger)', fontWeight: 700 }}>-{totalExpense.toLocaleString('ru-RU')}</div><div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Расход</div></div>
          <div style={{ textAlign: 'center' }}><div style={{ fontSize: 20, color: 'var(--success)', fontWeight: 700 }}>+{goodsIncome.toLocaleString('ru-RU')}</div><div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Товар Приход</div></div>
          <div style={{ textAlign: 'center' }}><div style={{ fontSize: 20, color: 'var(--danger)', fontWeight: 700 }}>-{goodsExpense.toLocaleString('ru-RU')}</div><div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Товар Списание</div></div>
        </div>
        {canEdit && (
          <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
            <button className="btn btn-success" onClick={() => navigate(`/shift/${id}/goods/new`)} style={{ flex: 1 }}><Package size={18} /> Товарная</button>
            <button className="btn btn-danger" onClick={() => navigate(`/shift/${id}/operations/new`)} style={{ flex: 1 }}><Receipt size={18} /> Кассовая</button>
          </div>
        )}
        <button className="btn btn-secondary" onClick={() => navigate(`/shift/${id}/operations`)} style={{ width: '100%' }}><List size={18} /> Журнал</button>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-title">Фото смены (Z-отчёт и др.)</div>
        {canEditPhotos && (
          <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
            <label className="btn btn-secondary" style={{ flex: 1, padding: 12 }}>
              <Camera size={16} /> Камера
              <input type="file" accept="image/*" capture="environment" onChange={handleAddShiftPhotos} style={{ display: 'none' }} />
            </label>
            <label className="btn btn-secondary" style={{ flex: 1, padding: 12 }}>
              <ImagePlus size={16} /> Галерея
              <input type="file" accept="image/*" multiple onChange={handleAddShiftPhotos} style={{ display: 'none' }} />
            </label>
          </div>
        )}
        {photoBusy && <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>Сжатие...</p>}
        {(!shift.photoIds || shift.photoIds.length === 0) ? (
          <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Нет фото</p>
        ) : (
          <div className="photo-grid">
            {shift.photoIds.map(pid => (
              <div key={pid} style={{ position: 'relative' }}>
                <PhotoThumb photoId={pid} />
                {canEditPhotos && (
                  <button onClick={() => handleRemoveShiftPhoto(pid)} style={{ position: 'absolute', top: 4, right: 4, background: 'var(--danger)', border: 'none', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    <X size={14} />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {isOwner && audit.length > 0 && (
        <div className="card" style={{ marginBottom: 16 }}>
          <button onClick={() => setShowHistory(!showHistory)} style={{ background: 'none', border: 'none', color: 'var(--text)', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 0 }}>
            <div className="card-title" style={{ marginBottom: 0 }}><History size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} /> История изменений</div>
            {showHistory ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {showHistory && (
            <div style={{ marginTop: 12 }}>
              {audit.map(a => (
                <div key={a.id} style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 6 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{new Date(a.timestamp).toLocaleString('ru-RU')}</span>
                    <span style={{ color: 'var(--primary)' }}>{a.action}</span>
                  </div>
                  <div style={{ marginTop: 2 }}>
                    {a.details?.new?.revenue !== undefined && `Выручка: ${a.details.new.revenue} ₽`}
                    {a.details?.new?.cash !== undefined && `, Нал: ${a.details.new.cash} ₽`}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {canEdit && (
        <button className="btn btn-success" onClick={() => navigate(`/shift/${id}/close`)} style={{ marginBottom: 40 }}><Lock size={18} /> Закрыть смену</button>
      )}
    </div>
  );
}
```

---

### src/pages/Users.jsx

```jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { store } from '../store';
import { ArrowLeft, Plus, UserCheck, Trash2, Edit3, Check, X, BookOpen } from 'lucide-react';

export default function Users({ user }) {
  const navigate = useNavigate();
  const [tab, setTab] = useState('team');
  const [users, setUsers] = useState([]);
  const [refs, setRefs] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ fullName: '', email: '', pin: '', role: 'seller' });
  const [refTab, setRefTab] = useState('expenseTypes');
  const [newName, setNewName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  useEffect(() => { load(); }, []);

  const load = async () => {
    setUsers(await store.getUsers());
    setRefs(await store.getReferences());
  };

  const handleAdd = async () => {
    if (!form.fullName || !form.pin) return alert('Заполните имя и PIN');
    await store.addUser(form);
    setForm({ fullName: '', email: '', pin: '', role: 'seller' });
    setShowForm(false);
    load();
  };

  const addRefItem = () => {
    if (!newName.trim()) return;
    const updated = { ...refs };
    const list = [...(updated[refTab] || [])];
    list.push({ id: 'ref_' + Date.now(), name: newName.trim(), active: true });
    updated[refTab] = list;
    store.saveReferences(updated).then(() => setRefs(updated));
    setNewName('');
  };

  const saveEdit = () => {
    if (!editName.trim()) return;
    const updated = { ...refs };
    updated[refTab] = updated[refTab].map(i => i.id === editingId ? { ...i, name: editName.trim() } : i);
    store.saveReferences(updated).then(() => setRefs(updated));
    setEditingId(null);
    setEditName('');
  };

  const deleteRefItem = (id) => {
    if (!confirm('Удалить запись?')) return;
    const updated = { ...refs };
    updated[refTab] = updated[refTab].filter(i => i.id !== id);
    store.saveReferences(updated).then(() => setRefs(updated));
  };

  const toggleActive = (id) => {
    const updated = { ...refs };
    updated[refTab] = updated[refTab].map(i => i.id === id ? { ...i, active: !i.active } : i);
    store.saveReferences(updated).then(() => setRefs(updated));
  };

  const refTabs = [
    { key: 'expenseTypes', label: 'Статьи расходов' },
    { key: 'paymentForms', label: 'Формы оплаты' },
    { key: 'contractors', label: 'Подрядчики' },
    { key: 'counterparties', label: 'Контрагенты' },
  ];

  if (user.role !== 'owner') {
    return <div className="empty-state">Доступ только для владельца</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>Команда и справочники</h1>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <button className={'btn ' + (tab === 'team' ? 'btn-primary' : 'btn-secondary')} onClick={() => setTab('team')} style={{ flex: 1 }}>Команда</button>
        <button className={'btn ' + (tab === 'refs' ? 'btn-primary' : 'btn-secondary')} onClick={() => setTab('refs')} style={{ flex: 1 }}><BookOpen size={14} /> Справочники</button>
      </div>

      {tab === 'team' && (
        <>
          <button className="btn btn-primary" onClick={() => setShowForm(!showForm)} style={{ marginBottom: 16 }}>
            <Plus size={18} /> Добавить сотрудника
          </button>

          {showForm && (
            <div className="card" style={{ marginBottom: 16 }}>
              <div className="form-group"><label className="form-label">ФИО</label><input className="form-input" value={form.fullName} onChange={e => setForm({...form, fullName: e.target.value})} /></div>
              <div className="form-group"><label className="form-label">Email</label><input type="email" className="form-input" value={form.email} onChange={e => setForm({...form, email: e.target.value})} /></div>
              <div className="form-group"><label className="form-label">PIN (4 цифры)</label><input className="form-input" value={form.pin} onChange={e => setForm({...form, pin: e.target.value})} maxLength={4} inputMode="numeric" /></div>
              <div className="form-group"><label className="form-label">Роль</label>
                <select className="form-select" value={form.role} onChange={e => setForm({...form, role: e.target.value})}>
                  <option value="seller">Продавец</option>
                  <option value="manager">Управляющий</option>
                  <option value="owner">Владелец</option>
                </select>
              </div>
              <button className="btn btn-success" onClick={handleAdd}><UserCheck size={18} /> Сохранить</button>
            </div>
          )}

          {users.map(u => (
            <div key={u.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--surface-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                {u.fullName.charAt(0)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600 }}>{u.fullName}</div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{u.email || '—'}</div>
              </div>
              <span className={`role-badge role-${u.role}`}>{u.role}</span>
            </div>
          ))}
        </>
      )}

      {tab === 'refs' && (
        <>
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', marginBottom: 16 }}>
            {refTabs.map(t => (
              <button key={t.key} onClick={() => { setRefTab(t.key); setEditingId(null); }} className={'btn ' + (refTab === t.key ? 'btn-primary' : 'btn-secondary')} style={{ padding: '8px 14px', fontSize: 13, whiteSpace: 'nowrap', flex: '0 0 auto' }}>{t.label}</button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            <input type="text" className="form-input" value={newName} onChange={e => setNewName(e.target.value)} placeholder="Новая запись..." style={{ flex: 1 }} />
            <button className="btn btn-primary" onClick={addRefItem} style={{ width: 'auto', padding: '14px 20px' }}><Plus size={18} /></button>
          </div>

          {(refs[refTab] || []).map(item => (
            <div key={item.id} className="list-item">
              {editingId === item.id ? (
                <>
                  <input type="text" className="form-input" value={editName} onChange={e => setEditName(e.target.value)} style={{ flex: 1, marginRight: 8 }} />
                  <div style={{ display: 'flex', gap: 4 }}>
                    <button onClick={saveEdit} style={{ background: 'var(--success)', border: 'none', borderRadius: 6, padding: 8, color: '#fff' }}><Check size={14} /></button>
                    <button onClick={() => setEditingId(null)} style={{ background: 'var(--danger)', border: 'none', borderRadius: 6, padding: 8, color: '#fff' }}><X size={14} /></button>
                  </div>
                </>
              ) : (
                <>
                  <div className="list-item-info" style={{ flex: 1 }}><h3>{item.name}</h3></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <button onClick={() => toggleActive(item.id)} className="btn btn-secondary" style={{ width: 'auto', padding: '6px 10px', fontSize: 11 }}>
                      {item.active ? 'Активна' : 'Скрыта'}
                    </button>
                    <button onClick={() => { setEditingId(item.id); setEditName(item.name); }} style={{ background: 'var(--surface-light)', border: 'none', borderRadius: 6, padding: 8, color: 'var(--text)' }}><Edit3 size={14} /></button>
                    <button onClick={() => deleteRefItem(item.id)} style={{ background: 'var(--danger)', border: 'none', borderRadius: 6, padding: 8, color: '#fff' }}><Trash2 size={14} /></button>
                  </div>
                </>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
```

---

### README.md

```markdown
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
```

---

### SUMMARY.md

```markdown
# Bistro24 PWA — Саммари (v2.0)

## Критические настройки (НЕ ТРОГАТЬ)

| Файл | Строка |
|------|--------|
| `vite.config.js` | `base: '/Bistro24/'` |
| `src/App.jsx` | `basename={import.meta.env.DEV ? '/' : '/Bistro24/'}` |
| `index.html` | `navigator.serviceWorker.register('%BASE_URL%sw.js')` — НЕ `/sw.js` |
| `public/sw.js` | `CACHE_NAME` — **бампать при каждом релизе** (сейчас `bistro24-v3`) |

## Репозиторий

https://github.com/pacman1988ninja-lgtm/Bistro24

- `main` — код + собранный `dist/` (Pages отдаёт содержимое `dist/`)
- `data` — ветка синхронизации данных (JSON-файл `bistro24-data.json`), создаётся приложением автоматически

**Деплой = закоммитить свежий `dist/` в main.** После любых изменений в `src/` обязательно: `npm run build` → коммит `dist/` вместе с исходниками, иначе на устройствах останется старая версия.

---

## Модель данных: тип смены (v2.0)

Тип смены — **персональный атрибут сотрудника в смене** (смена, в которую он вышел: Сутки/День/Ночь/Управляющий). К кассовой «открытой смене» тип не привязан.

- Хранится в `shift.employeeShiftTypes = { employeeId: shiftTypeId }`
- Поле `shiftTypeId` у смены **больше не пишется**; читается только как fallback для старых данных: `shift.employeeShiftTypes?.[empId] ?? shift.shiftTypeId`
- При открытии смены пользователь выбирает СВОЙ тип (Home); добавление сотрудника в смену — с его типом (ShiftDetail); тип можно менять кликом по нему в открытой смене
- Выбор типов ограничен `employee.shiftTypes` (разрешённые типы в справочнике Сотрудники)

## GitHub-синхронизация (v2.0)

Модуль `src/githubSync.js`. Данные (смены, операции, сотрудники, справочники, аудит) хранятся JSON-файлом `bistro24-data.json` в ветке `data` репозитория.

- **Настройка:** Настройки → Синхронизация с GitHub → ввести PAT (права `contents: read/write`). Токен хранится в localStorage устройства. Доступно owner/manager.
- **Модель:** snapshot + мерж по записям. Каждая запись имеет метку `__ut` (мс); побеждает новейшая (LWW). Удаления — через tombstones (`meta` store → `tombstones`).
- **Триггеры:** автопуш через 8 сек после локального изменения; полная синхронизация при старте, каждые 2 мин (видимая вкладка), по событию `online`, вручную из Настроек. Конфликт записи (409) — перемерж и ретрай (до 3 раз).
- **Фото НЕ синхронизируются** — остаются на устройстве (иначе файл раздует; лимит Contents API 1 МБ).
- IndexedDB версия **5** (добавлен store `meta`).

⚠ **Репозиторий публичный** — файл данных (включая PIN-коды) виден всем. Рекомендация: сделать репозиторий приватным или шифровать snapshot (не реализовано).

---

## Что реализовано

### Смены
- Открытие/закрытие смен; **одна открытая смена глобально** (гард в `store.createShift` для всех ролей; кнопка на главной ведёт в открытую смену)
- Нумерация по порядку (`shiftNumber`) — виден пробел при удалении
- Типы смен per-employee (см. выше)
- Добавление/удаление сотрудников в смену с проверкой доступных типов
- Автопересчет цепочки смен при изменении операций
- Ограничение на редактирование закрытых смен (3ч seller, 7д manager)
- Повторное закрытие заблокировано (UI + store)

### Операции
- Приход / Расход; статьи с привязкой к справочникам (Контрагент→Контрагенты, З/п→Сотрудники без owner, Подрядчик→Подрядчики, Инкассация→owner/manager)
- Фото (локально), редактирование, удаление
- Валидация: расход без заполненного связанного справочника не проводится
- **Все деньги — только через `toNum()`** (понимает запятую, fallback при битом вводе)

### Справочники
- Статьи расходов (linkedRef), Контрагенты, Сотрудники (роль, PIN, доступные типы смен), Подрядчики, Формы оплаты, Типы смен, пользовательские справочники

### Пользователи и права
- Роли seller/manager/owner; PIN-вход (уникальность PIN)
- **Проверка активности при каждой загрузке** (`getCurrentUser` сбрасывает сессию деактивированного) — восстановлено в v2.0 после регрессии
- seller: свои смены; manager: все смены/справочники/отчёты; owner: полный доступ

### Техническое
- React + Vite + IndexedDB (v5); PWA (SW network-first, manifest); GitHub Pages
- Синхронизация данных через GitHub (см. выше)

---

## Исправлено в v2.0

1. **Регрессия:** возвращена проверка `user.active` в `getCurrentUser` (затёрта коммитом a682143)
2. **Регрессия/недоработка:** гард на вторую открытую смену на уровне хранилища (в PR #1 был, в main не попал)
3. **SW-регистрация:** `'/sw.js'` → `'%BASE_URL%sw.js'` — на устройствах мог навсегда застрять старый SW с кэшем v1 (Pages отдаёт `/Bistro24/`, регистрация по абсолютному пути падала с 404)
4. Тип смены — per-employee по всей цепочке (создание, добавление сотрудника, редактирование, отображение), ограничение по разрешённым типам
5. Бамп `CACHE_NAME` → v3, пересобран `dist/`

---

## Что нужно доделать / проверить

1. **Приватность репозитория** — данные и PIN-коды публичны (либо private repo, либо шифрование snapshot)
2. **GitHub Actions автодеплой** — текущая схема (коммит dist) работает, но требует дисциплины; для Actions нужно переключить Pages Source на «GitHub Actions» в настройках репо + добавить workflow (токен без scope `workflow` не может запушить файл)
3. **Тестирование на устройствах** — PWA-установка, офлайн, первая синхронизация с токеном
4. Фото между устройствами не синхронизируются (осознанно)
5. `shiftNumber` при одновременном создании с разных устройств может дублироваться (косметика)
6. LWW-мерж чувствителен к расхождению часов устройств
7. Синхронизация с AppSheet — когда появится API
8. Отчёты — расширенная аналитика

## Правила для K2.7

- Любые деньги — только через `toNum()`
- Изменения в `store.js` — на ревью
- Релиз = src + свежий `dist/` + бамп `CACHE_NAME` одним коммитом
```

---

### .github/workflows/deploy.yml

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

### .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

---

### .oxlintrc.json

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

---

