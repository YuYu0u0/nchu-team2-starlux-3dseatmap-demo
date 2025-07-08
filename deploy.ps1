git checkout main
npm install
npm run build

$ProjectRoot = (Get-Location).Path
$ParentDir = Split-Path -Parent $ProjectRoot
$TempDistPath = Join-Path $ParentDir "tmp-dist"

if (Test-Path $TempDistPath) {
    Remove-Item -Recurse -Force $TempDistPath
}
New-Item -ItemType Directory -Path $TempDistPath | Out-Null

Copy-Item -Path ".\dist\*" -Destination $TempDistPath -Recurse -Force

if (-not (Get-ChildItem -Path $TempDistPath -Recurse | Where-Object { -not $_.PSIsContainer })) {
    exit 1
}

git checkout --orphan gh-pages-temp
git reset --hard
git clean -fd

Copy-Item -Path (Join-Path $TempDistPath "*") -Destination "." -Recurse -Force

Remove-Item -Recurse -Force $TempDistPath

git add .
git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
    git commit -m "deploy: build static site"
} else {
    exit 1
}

git push -f origin gh-pages-temp:gh-pages

git checkout main

$branches = git branch
if ($branches -match 'gh-pages-temp') {
    git branch -D gh-pages-temp
}
