var FileUploadWithPreview=function(s){"use strict";const O="";var c=(N=>(N.FILE_ADDED="fileUploadWithPreview:fileAdded",N.FILE_DELETED="fileUploadWithPreview:fileDeleted",N.CLEAR_BUTTON_CLICKED="fileUploadWithPreview:clearButtonClicked",N.IMAGE_MULTI_ITEM_CLICKED="fileUploadWithPreview:fileMultiItemClicked",N))(c||{});const j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wIAAAgBAQABXenwAAAAAElFTkSuQmCC",A="data:image/svg+xml;base64,PHN2ZyB0PSIxNzAyMzA1OTg0OTA2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2MjUiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHBhdGggZD0iTTg3OCAzMDYuM1Y5NDFjMCAxNS43LTEyLjcgMjguNC0yOC40IDI4LjRIMTkyYy0xMiAwLTIxLjYtOS43LTIxLjYtMjEuNlY4OS42YzAtOC44IDcuMS0xNS45IDE1LjktMTUuOWg0NDMuMWMwLjkgMCAxLjQgMS4xIDAuOCAxLjgtMC40IDAuNC0wLjQgMS4xIDAuMSAxLjVsMjQ3LjUgMjI4LjZjMCAwLjIgMC4yIDAuNSAwLjIgMC43eiIgZmlsbD0iI0Y0RjRGNCIgcC1pZD0iMjYyNiI+PC9wYXRoPjxwYXRoIGQ9Ik02MjkuNSAyOTFWNzMuN0w4NzggMzA1LjlINjQ0LjRjLTguMiAwLTE0LjktNi43LTE0LjktMTQuOXpNNDA2LjEgMzY1SDE4Ny45Yy01OC40IDAtMTA1LjctNDcuMy0xMDUuNy0xMDUuNyAwLTU4LjQgNDcuMy0xMDUuNyAxMDUuNy0xMDUuN2gyMTguMmM1OC40IDAgMTA1LjcgNDcuMyAxMDUuNyAxMDUuNyAwLjEgNTguNC00Ny4zIDEwNS43LTEwNS43IDEwNS43eiIgZmlsbD0iI0U1MjAyMCIgcC1pZD0iMjYyNyI+PC9wYXRoPjxwYXRoIGQ9Ik00NTguOCA3NzIuOWMtMjAuOCAwLTM3LjUtNi4yLTQ5LjctMTguNC0xOS4xLTE5LjEtMTkuMi00Ni4xLTE5LjItNDguNyAwLjMtMjIuNCA3LjItMzkuOCAyMC43LTUxLjkgMTkuMy0xNy4zIDQ1LjEtMTYuNSA1MC4xLTE2LjJoOTZjMjEuOCAwIDM4LjYtNi4yIDQ5LjktMTguNCAxMC41LTExLjQgMTQuOC0yNi40IDE2LjYtMzcgMS45LTExLjYgMS4zLTIwLjUgMS4zLTIwLjZ2LTEuMmMwLTIxLjMtNi42LTM3LjMtMjAuMi00OC44LTE5LTE2LjItNDguNC0yMC43LTY5LjgtMjEuNy0xMi42LTAuNi0yMy44IDAtMzEuNyAwLjd2MTEyLjdINDc1VjQ2Ni41bDExLjctMS45YzMuNi0wLjYgODguNy0xNCAxMzUuNiAyNS45IDE5LjggMTYuOCAyOS45IDQwLjIgMzAgNjkuNSAwLjQgNiAyIDQ4LjYtMjUuMSA3OC4xLTE2LjcgMTguMi00MC40IDI3LjQtNzAuMyAyNy40aC05Ny4zbC0wLjUtMC4xYy0xLTAuMS0xOC40LTEuMS0yOS45IDkuMy03LjMgNi43LTExLjEgMTcuMi0xMS4zIDMxLjR2MC4xYzAgMSAwLjIgMTcuOSAxMS4yIDI4LjcgNy4xIDcgMTcuOCAxMC40IDMxLjcgMTAuMWgxMGwtMC41LTQxLjcgMjcuOC0wLjMgMC45IDY5LjhoLTM3LjhjLTAuOSAwLjEtMS43IDAuMS0yLjQgMC4xeiIgZmlsbD0iI0U4MkIyOSIgcC1pZD0iMjYyOCI+PC9wYXRoPjxwYXRoIGQ9Ik0yMzUuOSAyMjIuM2MtNS40LTQuNy0xMy03LTIyLjYtN2gtMjYuMXY4OGgxNC45di0zMS40aDguOWM5LjMgMC4zIDE3LjMtMi4zIDIzLjUtNy43IDYuMy01LjUgOS42LTEyLjcgOS42LTIxLjUgMC4xLTguOC0yLjctMTUuNi04LjItMjAuNHogbS0zMy43IDYuNWg5LjJjMTEuOSAwIDE3LjQgNC41IDE3LjQgMTQuMiAwIDUtMS41IDguNy00LjUgMTEuMy0zLjEgMi42LTcuOCA0LTEzLjkgNGgtOC4xdi0yOS41ek0zMjQuMyAyMjYuOWMtOC45LTcuNy0yMC4xLTExLjYtMzMuNC0xMS42aC0yNi4ydjg4SDI5MGMxMy45IDAgMjUuNC00LjEgMzQuMy0xMi4zIDguOS04LjIgMTMuNC0xOS4yIDEzLjQtMzIuNyAwLjEtMTMuMS00LjQtMjMuNi0xMy40LTMxLjR6IG0tNDQuNiAyaDEwLjhjOS42IDAgMTcuNCAyLjUgMjMuMiA3LjQgNS43IDQuOSA4LjYgMTIuMyA4LjYgMjIuMSAwIDkuOS0yLjggMTcuNi04LjQgMjMtNS42IDUuNC0xMy42IDguMi0yMy44IDguMmgtMTAuM3YtNjAuN3pNNDA2LjggMjI4Ljl2LTEzLjZoLTQ3LjZ2ODcuOWgxNC45di0zNi42aDMwLjNWMjUzaC0zMC4zdi0yNC4xeiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iMjYyOSI+PC9wYXRoPjwvc3ZnPg==",u="data:image/svg+xml;base64,PHN2ZyB0PSIxNzAyMzA1ODU4NTg4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1NzkiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHBhdGggZD0iTTIwNS41IDY0SDY3NGwyMjMgMjI1LjVWOTM1YzAgMTMuODA3LTExLjE5MyAyNS0yNSAyNUgyMDUuNWMtMTMuODA3IDAtMjUtMTEuMTkzLTI1LTI1Vjg5YzAtMTMuODA3IDExLjE5My0yNSAyNS0yNXoiIGZpbGw9IiNGRkZGRkYiIHAtaWQ9IjE1ODAiPjwvcGF0aD48cGF0aCBkPSJNNjc0IDY0djIwMC41YzAgMTMuODA3IDExLjE5MyAyNSAyNSAyNWgxOThMNjc0IDY0eiIgZmlsbD0iI0U1RTVFNSIgcC1pZD0iMTU4MSI+PC9wYXRoPjxwYXRoIGQ9Ik02NyAxOTNtMTYgMGwyODcgMHExNiAwIDE2IDE2bDAgMjg3cTAgMTYtMTYgMTZsLTI4NyAwcS0xNiAwLTE2LTE2bDAtMjg3cTAtMTYgMTYtMTZaIiBmaWxsPSIjMDBDMDkwIiBwLWlkPSIxNTgyIj48L3BhdGg+PHBhdGggZD0iTTI1NSA1NzFtMTAgMGw1NTYgMHExMCAwIDEwIDEwbDAgMHEwIDEwLTEwIDEwbC01NTYgMHEtMTAgMC0xMC0xMGwwIDBxMC0xMCAxMC0xMFoiIGZpbGw9IiNEOEQ4RDgiIHAtaWQ9IjE1ODMiPjwvcGF0aD48cGF0aCBkPSJNMjU1IDcwN20xMCAwbDU1NiAwcTEwIDAgMTAgMTBsMCAwcTAgMTAtMTAgMTBsLTU1NiAwcS0xMCAwLTEwLTEwbDAgMHEwLTEwIDEwLTEwWiIgZmlsbD0iI0Q4RDhEOCIgcC1pZD0iMTU4NCI+PC9wYXRoPjxwYXRoIGQ9Ik0yNTUgNjM5bTEwIDBsNTU2IDBxMTAgMCAxMCAxMGwwIDBxMCAxMC0xMCAxMGwtNTU2IDBxLTEwIDAtMTAtMTBsMCAwcTAtMTAgMTAtMTBaIiBmaWxsPSIjRDhEOEQ4IiBwLWlkPSIxNTg1Ij48L3BhdGg+PHBhdGggZD0iTTI1NSA3NzRtMTAgMGw1NTYgMHExMCAwIDEwIDEwbDAgMHEwIDEwLTEwIDEwbC01NTYgMHEtMTAgMC0xMC0xMGwwIDBxMC0xMCAxMC0xMFoiIGZpbGw9IiNEOEQ4RDgiIHAtaWQ9IjE1ODYiPjwvcGF0aD48cGF0aCBkPSJNMjU1IDg0Mm0xMCAwbDU1NiAwcTEwIDAgMTAgMTBsMCAwcTAgMTAtMTAgMTBsLTU1NiAwcS0xMCAwLTEwLTEwbDAgMHEwLTEwIDEwLTEwWiIgZmlsbD0iI0Q4RDhEOCIgcC1pZD0iMTU4NyI+PC9wYXRoPjxwYXRoIGQ9Ik0yNDAuODg3IDM1Mi4zNjZsODIuNDkgNzguMTIzYzQuMDEgMy43OTggNC4xODEgMTAuMTI3IDAuMzg0IDE0LjEzNy0zLjc5OCA0LjAxLTEwLjEyNyA0LjE4Mi0xNC4xMzcgMC4zODVsLTgyLjQ5LTc4LjEyNC03OC4xMjMgODIuNDljLTMuNzk4IDQuMDEtMTAuMTI3IDQuMTgxLTE0LjEzNyAwLjM4NC00LjAxLTMuNzk4LTQuMTgyLTEwLjEyNy0wLjM4NS0xNC4xMzdsNzguMTI0LTgyLjQ5LTgyLjQ5LTc4LjEyM2MtNC4wMS0zLjc5OC00LjE4MS0xMC4xMjctMC4zODQtMTQuMTM3IDMuNzk4LTQuMDEgMTAuMTI3LTQuMTgyIDE0LjEzNy0wLjM4NWw4Mi40OSA3OC4xMjQgNzguMTIzLTgyLjQ5YzMuNzk4LTQuMDEgMTAuMTI3LTQuMTgxIDE0LjEzNy0wLjM4NCA0LjAxIDMuNzk4IDQuMTgyIDEwLjEyNyAwLjM4NSAxNC4xMzdsLTc4LjEyNCA4Mi40OXoiIGZpbGw9IiNGRkZGRkYiIHAtaWQ9IjE1ODgiPjwvcGF0aD48L3N2Zz4=",T="data:image/svg+xml;base64,PHN2ZyB0PSIxNzAyMzA1OTQ5MjUxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1NjciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHBhdGggZD0iTTg3MC43IDMwMS45djYzNC42YzAgMTUuNy0xMi43IDI4LjQtMjguNCAyOC40SDE4NC43Yy0xMiAwLTIxLjYtOS43LTIxLjYtMjEuNlY4NS4xYzAtOC44IDcuMS0xNS45IDE1LjktMTUuOWg0NDNjMC45IDAgMS40IDEuMSAwLjggMS44LTAuNCAwLjQtMC40IDEuMSAwLjEgMS41bDI0Ny41IDIyOC42YzAuMiAwLjIgMC4zIDAuNSAwLjMgMC44eiIgZmlsbD0iI0Y0RjRGNCIgcC1pZD0iMTU2OCI+PC9wYXRoPjxwYXRoIGQ9Ik02MjIuMyAyODYuNlY2OS4zbDI0OC41IDIzMi4ySDYzNy4xYy04LjItMC4xLTE0LjgtNi43LTE0LjgtMTQuOXpNMzk4LjkgMzYwLjZIMTgwLjZjLTU4LjQgMC0xMDUuNy00Ny4zLTEwNS43LTEwNS43IDAtNTguNCA0Ny4zLTEwNS43IDEwNS43LTEwNS43aDIxOC4yYzU4LjQgMCAxMDUuNyA0Ny4zIDEwNS43IDEwNS43IDAuMSA1OC4zLTQ3LjIgMTA1LjctMTA1LjYgMTA1Ljd6TTczMSA1MzQuM0gzMTAuMWMtOS4yIDAtMTYuNi03LjQtMTYuNi0xNi42IDAtOS4yIDcuNC0xNi42IDE2LjYtMTYuNkg3MzFjOS4yIDAgMTYuNiA3LjQgMTYuNiAxNi42IDAgOS4yLTcuNCAxNi42LTE2LjYgMTYuNnpNNzMxIDYzMC4ySDMxMC4xYy05LjIgMC0xNi42LTcuNC0xNi42LTE2LjYgMC05LjIgNy40LTE2LjYgMTYuNi0xNi42SDczMWM5LjIgMCAxNi42IDcuNCAxNi42IDE2LjYgMCA5LjItNy40IDE2LjYtMTYuNiAxNi42ek03MzEgNzI1SDMxMC4xYy05LjIgMC0xNi42LTcuNC0xNi42LTE2LjYgMC05LjIgNy40LTE2LjYgMTYuNi0xNi42SDczMWM5LjIgMCAxNi42IDcuNCAxNi42IDE2LjYgMCA5LjEtNy40IDE2LjYtMTYuNiAxNi42ek01MzcgODA1LjVIMzEwLjFjLTkuMiAwLTE2LjYtNy40LTE2LjYtMTYuNiAwLTkuMiA3LjQtMTYuNiAxNi42LTE2LjZINTM3YzkuMiAwIDE2LjYgNy40IDE2LjYgMTYuNiAwIDkuMi03LjQgMTYuNi0xNi42IDE2LjZ6IiBmaWxsPSIjNTVBOUZGIiBwLWlkPSIxNTY5Ij48L3BhdGg+PHBhdGggZD0iTTIyNCAzMDcuNWMtMSAwLTItMC4yLTMtMC42LTIuOC0xLjItNC43LTQtNC43LTd2LTkwLjJjMC00LjIgMy40LTcuNiA3LjYtNy42czcuNiAzLjQgNy42IDcuNnY3Mi4xbDUyLjUtNTAuOWMzLTIuOSA3LjctMi45IDEwLjYgMGw1MyA1MS4xdi03Mi4yYzAtNC4yIDMuNC03LjYgNy42LTcuNiA0LjIgMCA3LjYgMy40IDcuNiA3LjZWMzAwYzAgMy4xLTEuOCA1LjgtNC42IDctMi44IDEuMi02LjEgMC42LTguMy0xLjVMMjg5LjUgMjQ3bC02MC4yIDU4LjRjLTEuNCAxLjQtMy4zIDIuMS01LjMgMi4xeiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iMTU3MCI+PC9wYXRoPjwvc3ZnPg==",o="data:image/svg+xml;base64,PHN2ZyB0PSIxNzAyMzA1NDI3NjE5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY2NzAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHBhdGggZD0iTTE0Ny4yIDBDMTAyLjQgMCA2NS42IDM2LjggNjUuNiA4MS42djg2MC44YzAgNDQuOCAzNi44IDgxLjYgODEuNiA4MS42aDczMS4yYzQ0LjggMCA4MS42LTM2LjggODEuNi04MS42VjMyNC44TDY1Ny42IDBIMTQ3LjJ6IiBmaWxsPSIjOEU0QzlFIiBwLWlkPSI2NjcxIj48L3BhdGg+PHBhdGggZD0iTTk2MCAzMjYuNHYxNkg3NTUuMnMtMTAwLjgtMjAuOC05OS4yLTEwOC44YzAgMCA0LjggOTIuOCA5Ny42IDkyLjhIOTYweiIgZmlsbD0iIzcxMzk4NSIgcC1pZD0iNjY3MiI+PC9wYXRoPjxwYXRoIGQ9Ik02NTcuNiAwdjIzMy42YzAgMjUuNiAxNy42IDkyLjggOTcuNiA5Mi44SDk2MEw2NTcuNiAweiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iNjY3MyI+PC9wYXRoPjxwYXRoIGQ9Ik00NTYgNzI4YzAgNi40LTEuNiAxMi44LTYuNCAxNi0zLjIgMy4yLTg0LjggNzAuNC0xOTAuNCAxMTMuNi0xLjYgMS42LTQuOCAxLjYtOCAxLjZzLTYuNC0xLjYtOS42LTMuMmMtNi40LTMuMi05LjYtOC0xMS4yLTE2IDAtMS42LTQuOC01NC40LTQuOC0xMTJzNC44LTEwOC44IDQuOC0xMTJjMS42LTYuNCA0LjgtMTEuMiAxMS4yLTE2IDMuMi0xLjYgNi40LTMuMiA5LjYtMy4yIDMuMiAwIDYuNCAxLjYgOCAzLjIgMTA1LjYgNDEuNiAxODcuMiAxMTAuNCAxOTAuNCAxMTMuNiA0LjggMy4yIDYuNCA5LjYgNi40IDE0LjR6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSI2Njc0Ij48L3BhdGg+PC9zdmc+",D="data:image/svg+xml;base64,PHN2ZyB0PSIxNzAyMzA1NTc3OTM0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijc4NDEiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHBhdGggZD0iTTE5Ny4xMiA4OTZoNjI5Ljc2YzExLjI2NCAwIDIwLjk5MiA3LjE2OCAyNC41NzYgMTcuNDA4VjM1Mi4yNTZsLTE5MS40ODgtMTg0LjMyaC00ODguNDQ4VjkyMi4xMTJjLTAuNTEyLTE0LjMzNiAxMS4yNjQtMjYuMTEyIDI1LjYtMjYuMTEyeiBtLTI2LjExMiAzOC40aDEuMDI0Yy0wLjUxMi0yLjU2LTEuMDI0LTQuNjA4LTEuMDI0LTcuMTY4djcuMTY4eiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iNzg0MiI+PC9wYXRoPjxwYXRoIGQ9Ik04NTAuOTQ0IDkxMy40MDhjLTMuNTg0LTEwLjI0LTEzLjMxMi0xNy40MDgtMjQuNTc2LTE3LjQwOGgtNjI5Ljc2Yy0xNC4zMzYgMC0yNi4xMTIgMTEuNzc2LTI2LjExMiAyNi42MjR2NC42MDhjMCAyLjU2IDAuNTEyIDUuMTIgMS4wMjQgNy4xNjggMy4wNzIgMTEuMjY0IDEyLjggMTkuNDU2IDI1LjA4OCAxOS40NTZoNjI5Ljc2YzE0LjMzNiAwIDI2LjExMi0xMS43NzYgMjYuMTEyLTI2LjYyNHYtNC42MDhjMC41MTItMy41ODQtMC41MTItNi42NTYtMS41MzYtOS4yMTZ6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSI3ODQzIj48L3BhdGg+PHBhdGggZD0iTTUzNS4wNCAzODguMDk2aDI0OS4zNDR2MjguNjcyaC0yNDkuMzQ0di0yOC42NzJ6IG0wIDU3Ljg1NmgyNDkuMzQ0djI4LjY3MmgtMjQ5LjM0NFY0NDUuOTUyeiBtMCA1Ny4zNDRoMjQ5LjM0NHYyOC42NzJoLTI0OS4zNDR2LTI4LjY3MnogbTAgNDcuNjE2aDI0OS4zNDR2MjguNjcyaC0yNDkuMzQ0di0yOC42NzJ6IG0wIDY3LjA3MmgxMzEuNTg0djI4LjY3MmgtMTMxLjU4NHYtMjguNjcyeiIgZmlsbD0iI0FEQjdCNiIgcC1pZD0iNzg0NCI+PC9wYXRoPjxwYXRoIGQ9Ik0yMzguMDggNjg1LjA1Nmg1NDUuNzkydjI4LjY3MmgtNTQ1Ljc5MnYtMjguNjcyeiIgZmlsbD0iIzg0OEE4QSIgcC1pZD0iNzg0NSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMzguMDggNzgwLjhoMjQ5LjM0NHYyNC4wNjRoLTI0OS4zNDR2LTI0LjA2NHogbTAgNDguMTI4aDI0OS4zNDR2MjQuMDY0aC0yNDkuMzQ0di0yNC4wNjR6IG0yOTYuOTYtNDguMTI4aDI0OS4zNDR2MjQuMDY0aC0yNDkuMzQ0di0yNC4wNjR6IG0wIDQ4LjEyOGgyNDkuMzQ0djI0LjA2NGgtMjQ5LjM0NHYtMjQuMDY0eiIgZmlsbD0iI0FEQjdCNiIgcC1pZD0iNzg0NiI+PC9wYXRoPjxwYXRoIGQ9Ik02NTkuNDU2IDE2Ny45MzZ2MTgxLjc2aDE5MS40ODhsLTE5MS40ODgtMTgxLjc2eiIgZmlsbD0iI0YwRjBGMCIgcC1pZD0iNzg0NyI+PC9wYXRoPjxwYXRoIGQ9Ik0yMzguMDggMzc4Ljg4aDI0OS4zNDR2MjQ5LjM0NGgtMjQ5LjM0NHYtMjQ5LjM0NHoiIGZpbGw9IiM0QzkxOUIiIHAtaWQ9Ijc4NDgiPjwvcGF0aD48cGF0aCBkPSJNMjM4LjA4IDIzNS4wMDhoNDIxLjM3NnY4Ni4wMTZoLTQyMS4zNzZ2LTg2LjAxNnoiIGZpbGw9IiNENTdCM0UiIHAtaWQ9Ijc4NDkiPjwvcGF0aD48cGF0aCBkPSJNMjM4LjA4IDYyNy43MTJoMjM4LjU5MlY1OTkuNTUycy0xMS43NzYtMjguNjcyLTIyLjUyOC00Ni41OTJjLTguMTkyLTEzLjMxMi0xOS45NjgtMTYuODk2LTMwLjcyLTAuNTEybC0xOC45NDQgMjUuMDg4LTQwLjk2LTczLjIxNmMtMTUuMzYtMjcuMTM2LTQwLjQ0OC0yNy4xMzYtNTUuMjk2IDBsLTcwLjE0NCAxMjMuMzkyeiIgZmlsbD0iIzRENUI3MSIgcC1pZD0iNzg1MCI+PC9wYXRoPjxwYXRoIGQ9Ik00MDAuODk2IDQ0NS45NTJjMCAxNS44NzIgMTIuOCAyOC42NzIgMjguNjcyIDI4LjY3MiAxNS44NzIgMCAyOC42NzItMTIuOCAyOC42NzItMjguNjcyIDAtMTUuODcyLTEyLjgtMjguNjcyLTI4LjY3Mi0yOC42NzItMTUuODcyLTAuNTEyLTI4LjY3MiAxMi44LTI4LjY3MiAyOC42NzIgMC0wLjUxMiAwIDAgMCAweiIgZmlsbD0iI0VFQ0E4NiIgcC1pZD0iNzg1MSI+PC9wYXRoPjwvc3ZnPg==",y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wIAAAgBAQABXenwAAAAAElFTkSuQmCC",w="multi-item-clear-animation";class m{constructor(i,e={}){if(this.options={accept:"*",images:{backgroundImage:y,baseImage:j,successExcelImage:u,successFileAltImage:D,successPdfImage:A,successVideoImage:o,successWordImage:T},maxFileCount:0,multiple:!1,presetFiles:[],showDeleteButtonOnImages:!0,showSelectFileButton:!0},!i)throw new Error("No uploadId found. You must initialize file-upload-with-preview with a unique uploadId.");this.uploadId=i,this.cachedFileArray=[];const{accept:M,maxFileCount:t,multiple:g,presetFiles:I,showDeleteButtonOnImages:a,showSelectFileButton:L}=e;this.options.showDeleteButtonOnImages=a??!0,this.options.maxFileCount=t??0,this.options.presetFiles=I??[],this.options.multiple=g??!1,this.options.accept=M??this.options.accept,this.options.showSelectFileButton=L??!0;const l=document.querySelector(`.custom-file-container[data-upload-id="${this.uploadId}"]`);if(!l)throw new Error(`Could not find a 'custom-file-container' with the id of: ${this.uploadId}`);this.el=l,this.el.innerHTML+=`
      <label class="input-container">
        <input
          accept="${this.options.accept}"
          aria-label="Choose File"
          class="input-hidden"
          id="file-upload-with-preview-${i}"
          ${this.options.multiple?"multiple":""}
          type="file"
        />
      </label>
      <div class="image-preview"></div>
    `;const C=this.el.querySelector(".input-container"),n=this.el.querySelector(".custom-file-container .input-hidden"),E=this.el.querySelector(".custom-file-container .image-preview"),d=n!=null&&E!=null;if(e.showSelectFileButton?C.style.display="block":C.style.display="none",d)this.inputHidden=n,this.imagePreview=E;else throw new Error(`Cannot find all necessary elements for the id: ${this.uploadId}`);const{backgroundImage:r,baseImage:h,successFileAltImage:x,successPdfImage:p,successExcelImage:S,successWordImage:z,successVideoImage:Y}=e.images||{};this.options.images.baseImage=h??this.options.images.baseImage,this.options.images.successPdfImage=p??this.options.images.successPdfImage,this.options.images.successExcelImage=S??this.options.images.successExcelImage,this.options.images.successWordImage=z??this.options.images.successWordImage,this.options.images.successVideoImage=Y??this.options.images.successVideoImage,this.options.images.successFileAltImage=x??this.options.images.successFileAltImage,this.options.images.backgroundImage=r??this.options.images.backgroundImage,this.addImagesFromPath(this.options.presetFiles),this.imagePreview.style.backgroundImage=`url("${this.options.images.baseImage}")`,this.bindClickEvents()}bindClickEvents(){this.inputHidden.addEventListener("change",i=>{const e=i.target,{files:M}=e;M!=null&&(this.addFiles(M),e.value="")},!0),this.imagePreview.addEventListener("click",i=>{const e=i.target;if(e){if(e.matches(".custom-file-container .image-preview-item-clear-icon")){const M=e.getAttribute("data-upload-name"),t=this.cachedFileArray.findIndex(({name:g})=>g===M);this.deleteFileAtIndex(t)}if(e.matches(".custom-file-container .image-preview-item")){const M=e.querySelector(".image-preview-item-clear-icon"),t=M==null?void 0:M.getAttribute("data-upload-name"),g=this.cachedFileArray.findIndex(({name:L})=>L===t);if(g<0)return;const I={detail:{cachedFileArray:this.cachedFileArray,file:this.cachedFileArray[g],index:g,uploadId:this.uploadId}},a=new CustomEvent(c.IMAGE_MULTI_ITEM_CLICKED,I);window.dispatchEvent(a)}}}),this.inputHidden.addEventListener("click",i=>{this.inputHidden.accept=this.options.accept,this.inputHidden.multiple=this.options.multiple})}async addImagesFromPath(i){i.forEach(async e=>{try{const M="image/jpeg",g=await(await fetch(e,{mode:"cors"})).blob(),I=new File([g],"preset-file",{type:g.type||M});this.addFiles([I])}catch(M){M instanceof Error&&console.warn(`${M.message.toString()}`),console.warn("Image cannot be added to the cachedFileArray.")}})}addFiles(i){if(!i.length)return;let e=Array.from(i),M=!1;if(e.forEach(I=>{this.cachedFileArray.some(a=>a.name===I.name)&&(M=!0)}),M)return;if(this.options.multiple&&this.options.maxFileCount>0){const a=this.cachedFileArray.length+e.length-this.options.maxFileCount;a>0&&(e=e.slice(0,e.length-a))}this.options.multiple||(this.cachedFileArray=[]),e.forEach(I=>{const a=new File([I],`${I.name}`,{type:I.type});this.cachedFileArray.push(a),this.addFileToPreviewPanel(a)});const t={detail:{addedFilesCount:e.length,cachedFileArray:this.cachedFileArray,file:this.cachedFileArray[this.cachedFileArray.length-1<0?0:this.cachedFileArray.length-1],uploadId:this.uploadId}},g=new CustomEvent(c.FILE_ADDED,t);window.dispatchEvent(g)}addFileToPreviewPanel(i){const e=new FileReader;e.readAsDataURL(i),e.onload=()=>{if(!this.options.multiple){let I=this.options.images.successFileAltImage;i.type.match("image/png")||i.type.match("image/jpeg")||i.type.match("image/webp")||i.type.match("image/gif")?I=`url("${e.result}")`:i.type.match("application/pdf")?I=`url("${this.options.images.successPdfImage}")`:i.type.match("application/ms-excel")?I=`url("${this.options.images.successExcelImage}")`:i.type.match("application/msexcel")?I=`url("${this.options.images.successExcelImage}")`:i.type.match("application/msword")?I=`url("${this.options.images.successWordImage}")`:i.type.match("application/vnd.openxmlformats-officedocument.wordprocessingml.document")?I=`url("${this.options.images.successWordImage}")`:i.type.match("video/*")&&(I=`url("${this.options.images.successVideoImage}")`),this.imagePreview.style.backgroundImage=I;return}this.imagePreview.style.backgroundImage=`url("${this.options.images.backgroundImage}")`;const M=I=>`
        <span class="image-preview-item-clear">
          <span class="image-preview-item-clear-icon" data-upload-name="${I}">
            &times;
          </span>
        </span>
      `;let t=this.options.images.successFileAltImage;console.log("file.type",i.type),i.type.match("image/png")||i.type.match("image/jpeg")||i.type.match("image/webp")||i.type.match("image/gif")?t=e.result:i.type.match("application/pdf")?t=this.options.images.successPdfImage:i.type.match("application/ms-excel")?t=this.options.images.successExcelImage:i.type.match("application/msexcel")?t=this.options.images.successExcelImage:i.type.match("application/msword")?t=this.options.images.successWordImage:i.type.match("application/vnd.openxmlformats-officedocument.wordprocessingml.document")?t=this.options.images.successWordImage:i.type.match("video/*")&&(t=this.options.images.successVideoImage);const g=`
    <svg class="image-preview-item-progress hide" width="30" height="30">
     <circle class="image-preview-item-progress-bar" r="10" cx="15" cy="15"></circle>
    </svg>
`;this.imagePreview.innerHTML+=`
      <div
        class="image-preview-item"
        data-upload-name="${i.name}"
        style="background-image: url('${t}'); "
      >
        ${this.options.showDeleteButtonOnImages?M(i.name):void 0}
        ${g}
      </div>
    `}}replaceFiles(i){if(!i.length)throw new Error("Array must contain at least one file.");this.cachedFileArray=i,this.refreshPreviewPanel()}replaceFileAtIndex(i,e){if(!this.cachedFileArray[e])throw new Error(`There is no file at index: ${e}`);this.cachedFileArray[e]=i,this.refreshPreviewPanel()}deleteFileAtIndex(i){if(!this.cachedFileArray[i])throw new Error(`There is no file at index ${i}`);const[e]=this.cachedFileArray.splice(i,1),M=this.imagePreview.querySelector(`.image-preview-item[data-upload-name="${e.name}"]`);M&&this.imagePreview.removeChild(M),this.cachedFileArray.length===0&&(this.imagePreview.style.backgroundImage=`url("${this.options.images.baseImage}")`);const t={detail:{cachedFileArray:this.cachedFileArray,currentFileCount:this.cachedFileArray.length,index:i,uploadId:this.uploadId}},g=new CustomEvent(c.FILE_DELETED,t);window.dispatchEvent(g)}refreshPreviewPanel(){const e=this.imagePreview.querySelectorAll(".image-preview-item");Array.from(e).forEach(t=>t.classList.add(w)),setTimeout(()=>{if(this.imagePreview.innerHTML="",!this.cachedFileArray.length){this.reset();return}this.cachedFileArray.forEach(t=>this.addFileToPreviewPanel(t))},200)}emulateInputSelection(){this.inputHidden.click()}reset(){this.inputHidden.value="",this.imagePreview.style.backgroundImage=`url("${this.options.images.baseImage}")`,this.imagePreview.innerHTML="",this.cachedFileArray=[];const i={detail:{uploadId:this.uploadId}},e=new CustomEvent(c.CLEAR_BUTTON_CLICKED,i);window.dispatchEvent(e)}updateProgressBar(i,e){const M=this.imagePreview.querySelector(`.image-preview-item[data-upload-name="${i.name}"] .image-preview-item-progress`);if(M){const t=M.querySelector(".image-preview-item-progress-bar");if(t){const I=t.r.baseVal.value*2*Math.PI;t.style.strokeDasharray=`${I} ${I}`,t.style.strokeDashoffset=`${I-e/100*I}`,M.style.display=e===100||e===0?"none":"block"}}}}return s.DEFAULT_BACKGROUND_IMAGE=y,s.DEFAULT_BASE_IMAGE=j,s.DEFAULT_SUCCESS_EXCEL_IMAGE=u,s.DEFAULT_SUCCESS_FILE_ALT_IMAGE=D,s.DEFAULT_SUCCESS_PDF_IMAGE=A,s.DEFAULT_SUCCESS_VIDEO_IMAGE=o,s.DEFAULT_SUCCESS_WORD_IMAGE=T,s.Events=c,s.FileUploadWithPreview=m,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),s}({});
